import { FC, ReactNode, useEffect, useRef, useState } from "react";

import { Navigation } from "@/components/atoms/Buttons/Navigation/Navigation";
interface ISideBarProps {
  children: ReactNode;
}

export const SideBar: FC<ISideBarProps> = ({ children }) => {
  const [isOpen, _] = useState<boolean>(false);
  const elementRef = useRef<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(
    "-translate-x-full sm:translate-x-0"
  );

  const toggleMenu = () => {
    setOpenMenu((prevValue) =>
      prevValue === null ? "-translate-x-full sm:translate-x-0" : null
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        setOpenMenu("-translate-x-full sm:translate-x-0");
      }
    };

    if (window.innerWidth <= 768) {
      // Only add the event listener on mobile devices
      window.addEventListener("mousedown", handleOutsideClick);
      toggleMenu();
    }

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        onClick={toggleMenu}
        type="button"
        className={`inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
          !isOpen ? "visible" : "hidden"
        }`}>
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        ref={elementRef}
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${openMenu}`}
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-green-200 dark:bg-greenSpecial80 ">
          <Navigation />
        </div>
      </aside>

      <div className="p-4 sm:ml-64 bg-whiteTheme80 min-h-screen w-full">
        <div className="p-4  border-gray-200 rounded-lg">{children}</div>
      </div>
    </div>
  );
};
