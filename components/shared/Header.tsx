import Image from 'next/image'
import Link from 'next/link'

export default function Header({ title }: { title?: string }) {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <h1 className="sm:text-3xl text-xl font-bold tracking-tight">
          AI Workshop{' '}
          <span className="text-xl sm:text-lg font-medium">{title}</span>
        </h1>
      </Link>
      <a href="https://juancamiloqhz.com" target="_blank" rel="noreferrer">
        <Image
          alt="Vercel Icon"
          src="/vercelLogo.png"
          className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
          width={32}
          height={28}
        />
      </a>
    </header>
  )
}
