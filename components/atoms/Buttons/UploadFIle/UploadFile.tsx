import React, { ChangeEvent, FC, ReactNode } from 'react'

interface IUploadFileProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  children: ReactNode
}
export const UploadFile: FC<IUploadFileProps> = ({ onChange, children }) => {
  return (
    <div className="relative overflow-hidden w-48 rounded-full bg-greenSpecial80 hover:bg-white text-teal-800 py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 hover:cursor-pointer text-center">
      <input
        type="file"
        className="absolute inset-0 z-50 h-full opacity-0 cursor-pointer"
        onChange={onChange}
      />
      <span>{children}</span>
    </div>
  )
}
