import Head from 'next/head'
import styles from './index.module.css'
import Link from 'next/link'
import { NextPage } from 'next'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AI Workshop</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Link href="/name-my-pet">Name my pet</Link>
        <Link href="/twitter-bio">Generate Twitter Bio</Link>
        <Link href="/chat">Chat</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Home
