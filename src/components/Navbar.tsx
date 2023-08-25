import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Proposal",
      href: "#proposal",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="bg-[#a3a185]/80 fixed w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#a3a185] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* //TODO: Your logo or brand */}
              {/* <span className="text-white">Logo</span> */}
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Your navigation links */}
                {links.map(({ name, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="text-white hover:bg-[#a3a185]/80 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Your navigation links */}
          {links.map(({ name, href }, index) => (
            <a
              key={index}
              href={href}
              onClick={handleLinkClick}
              className="text-white hover:bg-[#a3a185] block px-3 py-2 rounded-md text-base font-medium"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
