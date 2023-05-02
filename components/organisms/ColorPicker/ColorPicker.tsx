import React, { useState, useRef, FC, useEffect } from 'react'
import ColorThief from 'colorthief'
import { UploadFile } from '@/components/atoms'
import { useLocalStorageState } from '@/hooks'

interface Props {}

export const ColorPickerCustom: FC<Props> = () => {
  const [colors, setColors] = useLocalStorageState<number[][]>('colors', [])

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Load selectedImage from local storage on component mount
  useEffect(() => {
    const storedSelectedImage = localStorage.getItem('selectedImage')
    if (storedSelectedImage) {
      setSelectedImage(storedSelectedImage)
    }
  }, [])

  // Save selectedImage to local storage whenever it changes
  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem('selectedImage', selectedImage)
    } else {
      localStorage.removeItem('selectedImage')
    }
  }, [selectedImage])

  const imageRef = useRef<HTMLImageElement | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0]
    const reader = new FileReader()

    reader.onload = () => {
      setSelectedImage(reader.result as string)
      const img = new Image()
      img.onload = () => {
        const colorThief = new ColorThief()
        const colorPalette = colorThief.getPalette(img, 10)
        setColors(colorPalette)
      }
      img.src = reader.result as string
    }

    reader.readAsDataURL(file)
  }

  return (
    <div>
      <div className="mt-4 mb-4">
        <UploadFile onChange={handleFileUpload}>
          {selectedImage ? 'Change Image' : 'Upload Image'}
        </UploadFile>
      </div>

      {selectedImage && (
        <div className="border-4 rounded-lg p-4 w-full border-greenSpecial20 bg-greenSpecial40">
          <div
            className=" p-4 w-full bg-whiteTheme80 "
            style={{
              display: 'flex',
              borderRadius: 10,
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={selectedImage}
                alt="Selected"
                ref={imageRef}
                height="900"
                width="600"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginLeft: '1rem',
              }}
            >
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: `rgb(${color.join(', ')})`,
                    height: '50px',
                    width: '50px',
                    marginBottom: '1rem',
                    borderRadius: 8,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
