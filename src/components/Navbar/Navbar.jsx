import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/makidev.png";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "#aboutUs",
  },
  {
    id: 3,
    title: "Our Services",
    link: "#services",
  },
  {
    id: 5,
    title: "Mission",
    link: "#mission",
  },
  {
    id: 4,
    title: "Gallery",
    // path: "/gallery",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#contact",
  },
  
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-20 bg-black text-white sticky top-0">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-2 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex justify-center items-center ml-8">
          <img src={Logo} className="w-12" alt="logo" />
          <h1 className="font-bold text-lg">Maki Developers</h1>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path || menu.link}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Hamburger menu */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <IoMdClose className="text-4xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <IoMdMenu className="text-4xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </motion.div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white py-4 px-8">
          <ul className="flex flex-col gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path || menu.link}
                  className="block py-2 px-3 hover:text-secondary"
                  onClick={toggleMenu} // Close menu on link click
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
