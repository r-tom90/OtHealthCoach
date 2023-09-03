import { FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";

const Footer = () => {
  const socialsTags = [
    {
      name: "Twitter",
      href: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      href: "https://www.Instagram.com",
      icon: <FaInstagram />,
    },
    {
      name: "Medium",
      href: "https://www.medium.com",
      icon: <FaMedium />,
    },
  ];

  return (
    <footer className="bg-[#a3a185] text-xs xs:text-sm sm:text-base py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} OT Health Coach. All rights
            reserved.
          </div>
          <div className="hidden md:flex space-x-4">
            {socialsTags.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="blank"
                className="text-white hover:text-stone-300 hover:ease-in duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
