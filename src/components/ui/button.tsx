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
          'bg-button-primary text-primary-black hover:bg-button-primary-hover',
        variant === 'default' &&
          'bg-button-default text-white hover:bg-button-default-hover',
        variant === 'ghost' && 'border border-white text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
