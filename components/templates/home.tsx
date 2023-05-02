import {
  ColorPickerCustom,
  EyeDropper,
  ColorPalette,
  SideBar,
} from '@/components/organisms'
import { useColor } from '@/context'

const HomePage = () => {
  const { color } = useColor()
  return (
    <SideBar>
      <div className="flex md:flex-column flex-row w-full">
        <ColorPickerCustom />
        <div className="mt-12">
          <EyeDropper />
        </div>
      </div>

      <ColorPalette baseColor={color} />
    </SideBar>
  )
}

export default HomePage
