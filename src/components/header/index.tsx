import { MenuMobile } from '../navigation/menu-mobile'
import { ToggleMenu } from './toggle-menu'

export function Header() {
  return (
    <header className="border-b border-[#1E2D3D] bg-primary-dark-blue px-[1.125rem] py-[1.125rem]">
      <div className="flex items-start justify-between ">
        <span className="text-secondary-slate-grey">michael-weaver</span>
        <ToggleMenu />
      </div>
      <div>
        <MenuMobile />
      </div>
    </header>
  )
}
