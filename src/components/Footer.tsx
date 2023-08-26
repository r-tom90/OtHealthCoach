import { FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#a3a185] text-xs xs:text-sm sm:text-base py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} OT Health Coach. All rights
            reserved.
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaMedium />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
