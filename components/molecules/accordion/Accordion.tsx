import React, { useState } from "react";
import classNames from "classnames";
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  classname?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  classname
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(
        "p-2 min-h-[50px] bg-white rounded shadow-md mb-4",
        classname
      )}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer font-semibold px-3 py-2 rounded-md">
        {title}
      </div>
      {isOpen && (
        <div className="border-t border-gray-300 mt-2 p-3">{children}</div>
      )}
    </div>
  );
};

export { Accordion };
