import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type FootPrintsAnimationProps = {
  length?: number
  width?: number
  rotate?: number
  height?: number
  dir?: number
}

const FootPrintsAnimation = ({
  length = 10,
  width = 25,
  rotate = 200,
  height = 120,
  dir = 1,
}: FootPrintsAnimationProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % length)
    }, 1000)

    return () => clearInterval(interval)
  }, [currentImageIndex, length])

  return (
    <div style={{ position: 'relative', width: "fit-content", height: "fit-content" }}>
      {[...Array(length)].map((_, index) => (
        <motion.img
          key={index}
          src="/footprint.png"
          alt="footprint"
          initial={{
            opacity: currentImageIndex === index ? 1 : 0,
            scale: currentImageIndex === index ? 1.2 : 1,
            rotate: index % 2 === 0 ? rotate : -rotate,
            x: index % 2 === 0 ? -width : width,
          }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
            scale: currentImageIndex === index ? 1 : 0.9,
            y: index * height,
            direction: dir === 1 ? 'initial' : 'revert',
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          style={{ position: 'absolute', mixBlendMode: "darken" }}
        />
      ))}
    </div>
  )
}

export default FootPrintsAnimation
