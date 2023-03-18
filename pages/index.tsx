import Head from 'next/head'
import { useState } from 'react'
import styles from './index.module.css'
import Image from 'next/image'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [animalInput, setAnimalInput] = useState('')
  const [result, setResult] = useState()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      setLoading(true)
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: animalInput }),
      })

      const data = await response.json()
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        )
      }

      setResult(data.result)
      setAnimalInput('')
      setLoading(false)
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error)
      alert(error.message)
      setLoading(false)
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/dog.png"
          alt="Website Logo"
          width={34}
          height={34}
          className={styles.icon}
        />
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input
            type="submit"
            value={loading ? 'Generating...' : 'Generate names'}
          />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  )
}
