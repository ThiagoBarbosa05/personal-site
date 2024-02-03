import { Trigger } from '@radix-ui/react-accordion'
import { Play } from 'lucide-react'
import React from 'react'

interface AccordionTriggerNavigationProps {
  children: React.ReactNode
}

export const AccordionTriggerNavigation = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerNavigationProps
>(({ children, ...props }, ref) => {
  return (
    <Trigger
      {...props}
      ref={ref}
      className="group flex w-full items-center gap-2 bg-[#1E2D3D] py-1 pl-7 text-white "
    >
      <Play
        className="transition-transform duration-200 group-data-[state=open]:rotate-90"
        size={10}
        fill="#FFFFFF"
      />
      <span>{children}</span>
    </Trigger>
  )
})

AccordionTriggerNavigation.displayName = 'AccordionTriggerNavigation'
