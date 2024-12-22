'use client'

import { motion } from 'framer-motion'

const AnimatedLogo = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <motion.div
        className="text-4xl font-bold cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          T
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          N
        </motion.span>
      </motion.div>
    </div>
  )
}

export default AnimatedLogo

