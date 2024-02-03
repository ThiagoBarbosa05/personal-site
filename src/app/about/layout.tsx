import { AboutHeader } from '@/components/about/header'
import { Footer } from '@/components/footer'

interface AboutLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div>
      <AboutHeader />
      <div className="mt-9 px-7 pb-16">{children}</div>
    </div>
  )
}
