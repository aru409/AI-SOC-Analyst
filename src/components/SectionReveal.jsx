import { useEffect, useRef, useState } from 'react'

function SectionReveal({ children, className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${className} ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
      {children}
    </div>
  )
}

export default SectionReveal
