'use client'

import { useEffect, useRef, useState } from 'react'

interface UseCounterOptions {
  from?: number
  to: number
  duration?: number
  decimals?: number
}

export function useCounter({ from = 0, to, duration = 1.8, decimals = 0 }: UseCounterOptions) {
  const [value, setValue] = useState(from)
  const ref = useRef<HTMLElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const range = to - from

          const step = (now: number) => {
            const elapsed = (now - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(parseFloat((from + range * eased).toFixed(decimals)))
            if (progress < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [from, to, duration, decimals])

  return { ref, value }
}
