import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-md">
      <button
        className="w-full px-4 py-2 flex justify-between items-center focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-medium">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-current text-gray-600"
            d="M9.41 7.41L10.83 6 16 11.17 21.17 6 22.59 7.41 16 14l-6.59-6.59z"
          />
        </svg>
      </button>
      {isOpen && <div className="px-4 py-2">{children}</div>}
    </div>
  );
}

export default Accordion;
