import { FC, SVGProps } from 'react'

interface IMenuItem {
  /**
   * label is the text displayed on the menu item
   */
  label?: string

  /**
   * function passed to the menu item
   */
  onClick?: () => void

  svg?: SVGProps<SVGSVGElement>
}
export const MenuItem: FC<IMenuItem> = ({ label, svg, onClick }) => {
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {svg && <svg {...svg} />}
        <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
      </a>
    </li>
  )
}
