'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <motion.svg
      className={`w-10 h-10 ${className}`}
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
          hover: { scale: 1.05, transition: { duration: 0.3 } }
        }}
      />
      <motion.path
        d="M30 30 L30 70 M30 50 L50 30 L50 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } },
          hover: { scale: 1.05, transition: { duration: 0.3 } }
        }}
      />
      <motion.path
        d="M70 30 L70 70 M55 30 L85 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 1 } },
          hover: { scale: 1.05, transition: { duration: 0.3 } }
        }}
      />
    </motion.svg>
  )
}

export default Logo

