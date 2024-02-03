import { AboutNavigation } from './navigation'

export function AboutHeader() {
  return (
    <div>
      <header>
        <span className="block py-5 pl-7 text-sm text-white">_about-me</span>
        <nav>
          <AboutNavigation />
        </nav>
      </header>
    </div>
  )
}
