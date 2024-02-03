import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative z-20 flex justify-between border-t border-[#1E2D3D] bg-primary-dark-blue py-3 pl-[1.125rem] ">
      <div className="flex flex-col justify-center">
        <span className="font-light text-secondary-slate-grey">
          find me in:
        </span>
      </div>

      <div className="flex">
        <Link
          className="flex flex-col justify-center border-l border-[#1E2D3D] px-3"
          href="sd"
        >
          <Image src="/github.svg" width={24} height={24} alt="github logo" />
        </Link>
        <Link
          className="flex flex-col justify-center border-l border-[#1E2D3D] px-3"
          href="sd"
        >
          <Image
            src="/linkedin.svg"
            width={24}
            height={24}
            alt="linkedIn logo"
          />
        </Link>
      </div>
    </footer>
  )
}
