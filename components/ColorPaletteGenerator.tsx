'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"

const ColorPaletteGenerator = () => {
  const [colors, setColors] = useState<string[]>(['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'])

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
  }

  const generatePalette = useCallback(() => {
    const newColors = Array(5).fill(null).map(() => generateRandomColor())
    setColors(newColors)
  }, [])

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Copied ${color} to clipboard!`)
    }, (err) => {
      console.error('Could not copy text: ', err)
    })
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-5 gap-2 h-20">
        {colors.map((color, index) => (
          <div
            key={index}
            className="cursor-pointer transition-transform hover:scale-105"
            style={{ backgroundColor: color }}
            onClick={() => copyToClipboard(color)}
            title={`Click to copy ${color}`}
          />
        ))}
      </div>
      <Button onClick={generatePalette} className="w-full">
        Generate New Palette
      </Button>
    </div>
  )
}

export default ColorPaletteGenerator

