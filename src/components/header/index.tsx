import { ToggleMenu } from './toggle-menu'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[#1E2D3D] bg-primary-dark-blue px-[1.125rem] py-[1.125rem]">
      <span className="text-secondary-slate-grey">michael-weaver</span>
      <ToggleMenu />
    </header>
  )
}
