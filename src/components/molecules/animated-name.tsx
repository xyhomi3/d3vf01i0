'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

const letters = 'ABCD3FGHIJK1MNOPQRSTUVWXYZ'

export const AnimatedName = () => {
  const [text, setText] = useState('1UCi3N 1OUA')
  const [intervalId] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const ref = useRef<HTMLHeadingElement | null>(null)

  const handleMouseOver = useCallback(() => {
    if (isAnimating) return

    let iteration = 0

    if (intervalId !== null) {
      clearTimeout(intervalId)
    }

    const animate = () => {
      setIsAnimating(true)
      setText(prevText =>
        prevText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index]
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join('')
      )

      if (iteration < text.length) {
        iteration += 1 / 3
        setTimeout(animate, 30)
      } else {
        setIsAnimating(false)
      }
    }

    animate()
  }, [intervalId, isAnimating, text])

  useEffect(() => {
    const currentRef = ref.current

    if (currentRef) {
      currentRef.addEventListener('mouseover', handleMouseOver)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseover', handleMouseOver)
      }
    }
  }, [handleMouseOver, ref])

  return (
    <h1 ref={ref} className='md:text-6xl sm:text-4xl text-3xl font-medium bg-gradient-to-r via-[#00bef0] to-[#c7f284] from-primary bg-clip-text text-transparent'>
      {text}
    </h1>
  )
}
