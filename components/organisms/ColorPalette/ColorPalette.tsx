import { getTextColor } from '@/utils'
import { useState } from 'react'

interface Props {
  baseColor: string
}

export const ColorPalette = ({ baseColor }: Props) => {
  const [palette, setPalette] = useState<string[]>([])
  const [complementary, setComplementary] = useState<string | null>(null)
  const [copied, setCopied] = useState<boolean>(false)
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined,
  )

  const textColor = getTextColor((selectedColor as string) ?? '#ffffff')

  const [] = useState<string | undefined>(undefined)
  const generatePalette = (): void => {
    const hex = baseColor?.replace('#', '')
    const r = parseInt(hex?.substring(0, 2), 16)
    const g = parseInt(hex?.substring(2, 4), 16)
    const b = parseInt(hex?.substring(4, 6), 16)

    const newPalette: string[] = []

    // Generate shades of the base color
    for (let i = 1; i <= 10; i++) {
      const shade = `#${Math.floor(r * i * 0.1)
        .toString(16)
        .padStart(2, '0')}${Math.floor(g * i * 0.1)
        .toString(16)
        .padStart(2, '0')}${Math.floor(b * i * 0.1)
        .toString(16)
        .padStart(2, '0')}`
      newPalette.push(shade)
    }

    // Calculate complementary color
    const complementaryColor =
      '#' +
      (0xffffff ^ parseInt(hex, 16)).toString(16).padStart(6, '0').toUpperCase()

    setPalette(newPalette)
    setComplementary(complementaryColor)
  }

  const handleColorClick = (color: string): void => {
    setSelectedColor(color)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(complementary as string)
    setCopied(!copied)
  }

  return (
    <div className="mt-8">
      <div className="flex items-center space-x-4">
        <div className="relative overflow-hidden w-60 mb-4 rounded-full bg-greenSpecial80 hover:bg-white text-teal-800 py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 hover:cursor-pointer text-center">
          <input
            type="button"
            className="absolute inset-0 z-50 h-full opacity-0 cursor-pointer"
            onClick={generatePalette}
            onChange={(e) => setPalette([])}
          />
          <span className="mb-4">
            Generate Palette <span aria-hidden="true">→</span>
          </span>
        </div>

        <input
          type="color"
          value={baseColor}
          onChange={generatePalette}
          className="appearance-none border-none h-12 mb-4 rounded-lg"
        />
      </div>

      {palette.length > 0 && (
        <>
          <h3>Palette</h3>
          <div className="flex flex-row">
            <div style={{ display: 'flex' }}>
              {palette.map((color) => (
                <div
                  key={color}
                  onClick={() => handleColorClick(color)}
                  style={{
                    backgroundColor: color,
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    margin: '0.5rem',
                    borderRadius: 8,
                  }}
                />
              ))}
            </div>
            <div className=" ml-2">
              Selected Color
              <h3
                style={{ background: selectedColor, color: textColor }}
                className="p-1 text-center rounded-lg"
              >
                {selectedColor}
              </h3>
            </div>
          </div>
          <h3>Complementary Color</h3>
          <div
            style={{
              backgroundColor: complementary as string,
              width: '50px',
              height: '50px',
              margin: '0.5rem',
              borderRadius: 8,
            }}
          />

          <div className="group inline-block relative">
            <p className="cursor-pointer" onClick={copyToClipboard}>
              {complementary}
            </p>
            {complementary && (
              <div className="group-hover:opacity-100 opacity-0 bg-gray-700 text-white text-xs rounded-md py-1 px-2 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
                {copied ? 'Copied' : 'Copy'}
              </div>
            )}
          </div>
          <h3>Recommendations</h3>
          <ul>
            <li>
              Use the base color as a background color, and the lighter shades
              as text or accent colors
            </li>
            <li>
              Use the darker shades for backgrounds or borders, and the
              complementary color as an accent color
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
