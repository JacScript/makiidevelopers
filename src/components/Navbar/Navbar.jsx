import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import Logo from "../../assets/makidev.png";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", link: "#aboutUs" },
  { id: 3, title: "Our Services", link: "#services" },
  { id: 4, title: "Mission", link: "#mission" },
  // { id: 5, title: "Gallery" },
  { id: 6, title: "Contact Us", link: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const textColor = isDarkMode ? "#f3f4f6" : "#1f2937"; // gray-100 : gray-800
  const invertedText = isDarkMode ? "#1f2937" : "#f3f4f6"; // opposite
  const bgColor = isDarkMode ? "#111827" : "#ffffff"; // gray-900 : white
  const cardBg = isDarkMode ? "#1f2937" : "#e5e7eb"; // gray-800 : gray-200
  const accentBlue = isDarkMode ? "#60a5fa" : "#2563eb"; // blue-400 : blue-600

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`z-50 fixed top-0 w-full transition-all duration-300 h-24 flex justify-center items-center ${
        scrolled ? "backdrop-blur-md shadow-lg" : "shadow-sm"
      }`}
      style={{
        backgroundColor: scrolled
          ? isDarkMode
            ? "rgba(17, 24, 39, 0.9)"
            : "rgba(255, 255, 255, 0.9)"
          : bgColor,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[80%] mx-auto px-4 py-3"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <motion.img
              src={Logo}
              className="w-12 h-12 rounded-lg shadow-md"
              alt="logo"
              whileHover={{ rotate: 5 }}
            />
            <h1
              className="font-bold max-sm:hidden text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Maki Developers
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-1">
              {NavbarMenu.map((menu, index) => (
                <motion.li
                  key={menu.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={menu.path || menu.link}
                    className="relative px-4 py-2 font-medium transition-colors duration-300 group"
                    style={{ color: textColor }}
                  >
                    {menu.title}

                    {/* Underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300"
                      style={{ backgroundColor: accentBlue }}
                      whileHover={{ width: "100%" }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Theme Toggle (Desktop) */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full shadow-md transition-all"
              style={{
                backgroundColor: cardBg,
                color: textColor,
              }}
            >
              {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Theme Toggle (Mobile) */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full shadow-md"
              style={{
                backgroundColor: cardBg,
                color: textColor,
              }}
            >
              {isDarkMode ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 rounded-lg shadow-md"
              style={{
                backgroundColor: cardBg,
                color: textColor,
              }}
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden border-t overflow-hidden backdrop-blur-md"
            style={{
              backgroundColor: isDarkMode
                ? "rgba(17, 24, 39, 0.95)"
                : "rgba(255, 255, 255, 0.95)",
              borderColor: isDarkMode ? "#374151" : "#e5e7eb",
            }}
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-2">
                {NavbarMenu.map((menu, index) => (
                  <motion.li
                    key={menu.id}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={menu.path || menu.link}
                      className="block px-4 py-3 rounded-lg font-medium border-l-4 border-transparent transition-all"
                      style={{
                        color: textColor,
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = isDarkMode
                          ? "rgba(55, 65, 81, 0.8)"
                          : "rgba(239, 246, 255, 0.8)";
                        e.target.style.color = accentBlue;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = textColor;
                      }}
                      onClick={toggleMenu}
                    >
                      {menu.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
