'use client'
import { ComponentProps, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface TypewriterProps extends ComponentProps<'div'> {
  text: string
  hideCursor?: boolean
  delay?: number
  cursorSize: 'sm' | 'base' | 'lg' | '3xl' | '6xl'
  timeout?: number
}

export function Typewriter({
  text,
  hideCursor,
  delay,
  cursorSize,
  timeout,
  ...props
}: TypewriterProps) {
  const [textToType, setTextToType] = useState<string>()
  const [showCursor, setShowCursor] = useState<boolean>()

  const typeOnScreen = (text: string, i = 0) => {
    if (i < text.length) {
      setShowCursor(true)
      setTextToType(text.slice(0, i + 1))
      setTimeout(() => typeOnScreen(text, i + 1), timeout ?? 50)
    } else if (i >= text.length && hideCursor) {
      setShowCursor(false)
    }
  }

  useEffect(() => {
    setTimeout(() => typeOnScreen(text), delay ?? 200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className="block" {...props}>
      {textToType}
      {showCursor && (
        <span
          className={twMerge(
            'animate-cursor font-medium',
            cursorSize === 'sm' && 'text-sm',
            cursorSize === 'base' && 'text-base',
            cursorSize === 'lg' && 'text-lg',
            cursorSize === '3xl' && 'text-[2rem]',
            cursorSize === '6xl' && 'text-[3.875]',
          )}
        >
          |
        </span>
      )}
    </span>
  )
}
