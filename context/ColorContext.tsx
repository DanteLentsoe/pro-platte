import { NextPageContext } from 'next'
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  FC,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react'

interface ColorContextProps {
  color: string
  setColor: Dispatch<SetStateAction<string>>
}

export const ColorContext = createContext<ColorContextProps>({
  color: '',
  setColor: () => {},
})

export const useColor = (): ColorContextProps => {
  const context = useContext(ColorContext)

  if (context === undefined) {
    throw new Error('useColor must be used within a ColorContextProvider')
  }

  return context
}

interface ColorContextProviderProps {
  children: ReactNode
  initialColor?: string
}

const ColorContextProvider: FC<ColorContextProviderProps> = ({
  children,
  initialColor = '#fff',
}) => {
  const [color, setColor] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('color') ?? initialColor
    } else {
      return initialColor
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('color', color)
    }
  }, [color])

  const value: ColorContextProps = {
    color,
    setColor,
  }

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}

export default ColorContextProvider

export const getServerSideProps = (ctx: NextPageContext) => {
  const initialColor = ctx.req?.headers.cookie?.match(/color=([^;]+)/)?.[1]

  return { props: { initialColor } }
}
