import { Typewriter } from '@/components/typewriter'

export default function BioPage() {
  return (
    <div>
      <h3 className="flex items-center gap-3 font-light text-white">
        <Typewriter
          text="// personal-info"
          timeout={20}
          cursorSize="base"
          hideCursor
        />
        <Typewriter
          className="text-secondary-slate-grey"
          text="/ bio"
          cursorSize="base"
          timeout={20}
          delay={700}
          hideCursor
        />
      </h3>
      <p className="mt-4 font-light text-secondary-slate-grey">
        <Typewriter
          text="I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum."
          cursorSize="base"
          delay={1200}
          timeout={10}
        />
      </p>
    </div>
  )
}
