import Link from 'next/link'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'

interface ISideBarProps {
  children: ReactNode
}

export const SideBar: FC<ISideBarProps> = ({ children }) => {
  const [isOpen, _] = useState<boolean>(false)
  const elementRef = useRef<null>(null)
  const [openMenu, setOpenMenu] = useState<string | null>(
    '-translate-x-full sm:translate-x-0',
  )

  const toggleMenu = () => {
    setOpenMenu((prevValue) =>
      prevValue === null ? '-translate-x-full sm:translate-x-0' : null,
    )
  }

  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        setOpenMenu('-translate-x-full sm:translate-x-0')
      }
    }

    if (window.innerWidth <= 768) {
      // Only add the event listener on mobile devices
      window.addEventListener('mousedown', handleOutsideClick)
      toggleMenu()
    }

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  const svgArray = [
    {
      label: 'Dashboard',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10 10-4.485 10-10S17.515 2 12 2zm0 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm1-8.5V7h-2v2.5h2zm0 3.5V14h-2v-2.5h2z" />
        </svg>
      ),
    },
    {
      label: 'Profile',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 12c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm0 2c-2.206 0-4.142.975-5.485 2.516-.127.144-.256.286-.394.422C6.203 16.51 4 18.491 4 20v1h16v-1c0-1.509-2.203-3.49-2.121-3.062-.138-.136-.267-.278-.394-.422C16.142 14.975 14.206 14 12 14zm0-10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
        </svg>
      ),
    },
  ]
  return (
    <div>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        onClick={toggleMenu}
        type="button"
        className={`inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
          !isOpen ? 'visible' : 'hidden'
        }`}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={elementRef}
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${openMenu}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-green-200 dark:bg-greenSpecial80 ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 hover:text-white  rounded-lg dark:text-blackTextMain hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-blackTextMain transition duration-75 hover:text-white  dark:text-blackTextMain  group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Home</span>
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="flex items-center p-2 text-gray-900  hover:text-white rounded-lg dark:text-blackTextMain hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-blackTextMain transition duration-75 dark:text-blackTextMain group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center p-2 text-gray-900 hover:text-white  rounded-lg dark:text-blackTextMain hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-blackTextMain transition duration-75 dark:text-blackTextMain group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 bg-whiteTheme80 min-h-screen w-full">
        <div className="p-4  border-gray-200 rounded-lg">{children}</div>
      </div>
    </div>
  )
}
