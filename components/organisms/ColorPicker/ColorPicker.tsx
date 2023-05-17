import React, { FC, MutableRefObject } from 'react'

import NextImage from 'next/image'

interface IPalettePro {
  colors: number[][]
  selectedImage: string | null
  imageRef: MutableRefObject<HTMLImageElement | null>
}

export const ColorPickerCustom: FC<IPalettePro> = ({
  colors,
  imageRef,
  selectedImage,
}) => {
  return (
    <div>
      {selectedImage && (
        <div className="border-4 rounded-lg p-4 w-full border-greenSpecial20 bg-greenSpecial40 mt-8">
          <div
            className=" p-4 w-full bg-whiteTheme80 "
            style={{
              display: 'flex',
              borderRadius: 10,
            }}
          >
            <div style={{ position: 'relative' }}>
              <NextImage
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
