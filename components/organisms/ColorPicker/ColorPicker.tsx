import React, { useState, useRef, FC } from 'react'
import ColorThief from 'colorthief'
import { UploadFile } from '@/components/atoms'
interface Props {}

export const ColorPickerCustom: FC<Props> = () => {
  const [colors, setColors] = useState<number[][]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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

  const handleColorPicker = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const x = event.nativeEvent.offsetX
    const y = event.nativeEvent.offsetY
    const ctx = imageRef.current!.getContext('2d')!
    const pixelData = ctx.getImageData(x, y, 1, 1).data
    const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`
    console.log(color) // You can replace this with any other functionality to show the color
  }

  return (
    <div>
      <UploadFile onChange={handleFileUpload}>Upload Image</UploadFile>

      {selectedImage && (
        <div className="border-4 border-gray-400 rounded-lg p-4 w-full  bg-slate-600">
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
                height="300"
                width="400"
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
