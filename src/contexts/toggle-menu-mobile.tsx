'use client'

import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface ToggleMenuProps {
  children: React.ReactNode
}

interface ToggleMenuContextType {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ToggleMenuMobile = createContext({} as ToggleMenuContextType)

export function ToggleMenuProvider({ children }: ToggleMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ToggleMenuMobile.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ToggleMenuMobile.Provider>
  )
}
