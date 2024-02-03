'use client'

import { Menu, X } from 'lucide-react'
import { useContext } from 'react'

import { ToggleMenuMobile } from '@/contexts/toggle-menu-mobile'

export function ToggleMenu() {
  const { isOpen, setIsOpen } = useContext(ToggleMenuMobile)

  console.log(isOpen)

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <X className="text-secondary-slate-grey" />
      ) : (
        <Menu className="text-secondary-slate-grey" />
      )}
    </button>
  )
}
