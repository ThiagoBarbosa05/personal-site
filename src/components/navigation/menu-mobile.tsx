'use client'

import Link from 'next/link'
import { useContext } from 'react'

import { ToggleMenuMobile } from '@/contexts/toggle-menu-mobile'

export function MenuMobile() {
  const { isOpen } = useContext(ToggleMenuMobile)

  return (
    <div
      data-state={isOpen}
      className="animate-duration-50 fixed bottom-0 left-0 right-0 top-[3.8125rem] z-10 overflow-hidden bg-primary-dark-blue data-[state=false]:hidden data-[state=false]:animate-fade-up data-[state=true]:animate-flip-down"
    >
      <nav className="text-white">
        <ul>
          <li className="border-b border-[#1E2D3D] p-[1.125rem]">
            <Link href="/">_hello</Link>
          </li>
          <li className="border-b border-[#1E2D3D] p-[1.125rem]">
            <Link href="/about">_about-me</Link>
          </li>
          <li className="border-b border-[#1E2D3D] p-[1.125rem]">
            <Link href="">_projects</Link>
          </li>
          <li className="border-b border-[#1E2D3D] p-[1.125rem]">
            <Link href="">_contact-me</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
