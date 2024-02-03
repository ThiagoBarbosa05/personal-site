import { Typewriter } from '@/components/typewriter'

export default function Hello() {
  return (
    <main className="flex flex-1 flex-col px-7">
      <section className="flex flex-1 flex-col pt-24">
        <div className="relative flex flex-col">
          <Typewriter
            className="pb-2 text-lg font-light text-white"
            text="Hi all. I am"
            cursorSize="lg"
            hideCursor
          />
          <Typewriter
            className="text-6xl text-white"
            text="Michael Weaver"
            cursorSize="3xl"
            delay={1300}
            hideCursor
          />
          <Typewriter
            className="text-xl font-light text-accent-turquoise"
            text="&gt; Front-end developer"
            cursorSize="lg"
            delay={2800}
          />
        </div>
      </section>

      <footer className="mb-20">
        <span className="text-sm font-light text-secondary-slate-grey">
          {'// find my profile on Github:'}
        </span>
        <a href="#" target="_blank">
          <p className="break-all text-sm font-medium leading-6">
            <span className="text-sm font-medium text-secondary-purple">
              const
            </span>{' '}
            <span className="text-sm font-medium text-accent-turquoise">
              githubLink
            </span>{' '}
            <span className="text-sm font-medium text-white">=</span>{' '}
            <span className="text-sm font-medium text-accent-sand">
              “https://github.com/example/url”
            </span>
          </p>
        </a>
      </footer>
    </main>
  )
}
