const Footer = () => {
  return (
    <footer className="bg-[#a3a185] text-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} OT Health Coach. All rights
            reserved.
          </div>
          {/* <nav className="space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </nav> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
