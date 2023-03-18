import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import cn from 'clsx'

export default function Page({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
      <Header />
      <main className={cn('w-full max-w-3xl mx-auto py-16', className)}>
        {children}
      </main>
      <Footer />
    </>
  )
}
