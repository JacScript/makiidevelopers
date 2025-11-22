import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube, FaHeart, FaArrowUp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      href: "#",
      color: "hover:text-green-500",
      bgColor: "hover:bg-green-500/10",
      tooltip: "WhatsApp"
    },
    {
      icon: <FaInstagram />,
      href: "#",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/10",
      tooltip: "Instagram"
    },
    {
      icon: <TbWorldWww />,
      href: "#",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10",
      tooltip: "Website"
    },
    {
      icon: <FaYoutube />,
      href: "#",
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-500/10",
      tooltip: "YouTube"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.9 }
  };

  const scrollButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.1,
      boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" 
    },
    tap: { scale: 0.9 }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            variants={scrollButtonVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl ${
              isDarkMode
                ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                : "bg-gradient-to-br from-blue-500 to-purple-500 text-white"
            }`}
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className={`py-16 lg:py-20 transition-colors duration-500 ${
        isDarkMode 
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            {/* Copyright Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
            >
              <p className={`text-lg flex items-center gap-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                © 2024 Maki Developers, Inc. All rights reserved.
                
              </p>
              
              {/* Additional Links */}
              <div className={`flex items-center gap-6 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                <motion.a
                  href="#privacy"
                  whileHover={{ scale: 1.05, color: isDarkMode ? "#60a5fa" : "#2563eb" }}
                  className="transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#terms"
                  whileHover={{ scale: 1.05, color: isDarkMode ? "#60a5fa" : "#2563eb" }}
                  className="transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, color: isDarkMode ? "#60a5fa" : "#2563eb" }}
                  className="transition-colors duration-300"
                >
                  Contact
                </motion.a>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className={`text-sm font-medium mr-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                Follow us:
              </span>
              
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialIconVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className={`relative p-3 rounded-2xl text-lg transition-all duration-300 group ${
                      isDarkMode
                        ? "bg-gray-700/50 text-gray-300"
                        : "bg-white/70 text-gray-600"
                    } ${social.color} ${social.bgColor} shadow-lg`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      isDarkMode ? "bg-gray-600 text-white" : "bg-gray-800 text-white"
                    }`}>
                      {social.tooltip}
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                        isDarkMode ? "bg-gray-600" : "bg-gray-800"
                      }`} />
                    </div>

                    {/* Icon */}
                    {social.icon}

                    {/* Pulse Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl border-2 ${
                        social.color.replace('hover:', '')
                      } opacity-0`}
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{
                        scale: 1.2,
                        opacity: 0.3,
                        transition: {
                          duration: 0.6,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className={`mt-12 pt-8 border-t text-center ${
              isDarkMode ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"
            }`}
          >
            <p className="text-sm mb-4">
              Building the future, one line of code at a time 
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                Enterprise Ready
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white"
              >
                ⚡ High Performance
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white"
              >
                Secure & Reliable
              </motion.span>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-4 h-4 rounded-full absolute bottom-10 left-10 ${
                isDarkMode ? "bg-blue-400/30" : "bg-blue-500/30"
              }`}
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className={`w-3 h-3 rounded-full absolute bottom-20 right-20 ${
                isDarkMode ? "bg-purple-400/30" : "bg-purple-500/30"
              }`}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;