import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
  variant?: 'primary' | 'default' | 'ghost'
}

export function Button({
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-lg px-[0.875rem] py-[0.625rem] text-sm leading-none transition',
        variant === 'primary' &&
          'bg-button-primary hover:bg-button-primary-hover text-primary-black',
        variant === 'default' &&
          'bg-button-default hover:bg-button-default-hover text-white',
        variant === 'ghost' && 'border border-white text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
