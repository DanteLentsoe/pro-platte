import Link from "next/link";
import { FC, ReactNode } from "react";
import classnames from "classnames";
interface IButtonProps {
  /**
   * isButton when true you just pass an onClick function to the button, else it is a link
   */
  isButton?: boolean;

  /**
   * href is the link that is passed to the button
   *
   * */

  href?: string;

  className?: string;
  /**
   * function passed to the menu item
   */
  onClick?: () => void;

  /**
   * children is used as <Button>Text</Button>
   */
  children: ReactNode;
}
export const Button: FC<IButtonProps> = ({
  onClick,
  children,
  className,
  isButton = true,
  href
}) => {
  return (
    <>
      {isButton ? (
        <button
          className={classnames(
            "relative overflow-hidden w-48 rounded-full bg-greenSpecial80 hover:bg-white text-teal-800 py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 hover:cursor-pointer text-center",
            className
          )}
          onClick={onClick}
          type="submit">
          {children}
        </button>
      ) : (
        <Link
          href={href as string}
          className="relative overflow-hidden w-48 rounded-full bg-greenSpecial80 hover:bg-white text-teal-800 py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 hover:cursor-pointer text-center">
          {children}
        </Link>
      )}
    </>
  );
};
