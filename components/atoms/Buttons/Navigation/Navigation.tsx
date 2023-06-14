import Link from "next/link";
import { FC } from "react";
import { BiHome } from "react-icons/bi";
import { IoColorFillOutline } from "react-icons/io5";
import { RxCodesandboxLogo } from "react-icons/rx";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface NavItem {
  href: string;
  Icon: any;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", Icon: BiHome, label: "Home" },
  { href: "/editor", Icon: IoColorFillOutline, label: "Color Picker" },
  { href: "/sandbox", Icon: RxCodesandboxLogo, label: "Layout Sandbox" },
  { href: "/tips", Icon: MdOutlineTipsAndUpdates, label: "Tips and Guide" },
  { href: "/contact", Icon: GrContact, label: "Contact" },
  { href: "/about", Icon: AiOutlineInfoCircle, label: "About" }
];

export const Navigation: FC = () => (
  <ul className="space-y-2 font-medium">
    {navItems.map(({ href, Icon, label }) => (
      <li key={href}>
        <Link
          href={href}
          className="flex items-center p-2 text-gray-900 hover:text-white  rounded-lg dark:text-blackTextMain hover:bg-gray-100 dark:hover:bg-gray-700">
          <Icon size={30} />
          <span className="ml-3">{label}</span>
        </Link>
      </li>
    ))}
  </ul>
);
