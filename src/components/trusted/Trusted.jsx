import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { CiBank } from "react-icons/ci";
import { FaCrown, FaShieldAlt, FaRocket, FaAward } from "react-icons/fa";

const TrustedBy = () => {
  const { isDarkMode } = useTheme();

  const clientCategories = [
    {
      category: "Government Agencies",
      count: "15+",
      description: "Ministries, regulatory bodies, and government institutions",
      icon: <CiBank className="text-xl" />,
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      category: "Financial Institutions",
      count: "2+",
      description: "Banks, insurance companies, and financial services",
      icon: <CiBank className="text-xl" />,
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      category: "Educational Institutions",
      count: "2+",
      description: "Universities, colleges, and training centers",
      icon: <CiBank className="text-xl" />,
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3
    },
    {
      category: "Private Sector",
      count: "1+",
      description: "Corporations, SMEs, and business organizations",
      icon: <CiBank className="text-xl" />,
      gradient: "from-orange-500 to-red-500",
      delay: 0.4
    }
  ];

  const stats = [
    { number: "20+", label: "Projects Completed", icon: <FaRocket /> },
    { number: "50+", label: "Happy Clients", icon: <FaAward /> },
    { number: "3+", label: "Years Experience", icon: <FaShieldAlt /> },
    { number: "24/7", label: "Support", icon: <FaCrown /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section className={`py-20 lg:py-28 transition-colors duration-500 overflow-hidden ${
      isDarkMode 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    }`}>
      <div className="w-full md:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 border ${
              isDarkMode 
                ? "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" 
                : "text-blue-600 bg-blue-500/10 border-blue-500/20"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* <FaCrown className="mr-2" /> */}
            Trusted by Leading Organizations
          </motion.span>
          
          <motion.h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Client Portfolio
            </span>
          </motion.h1>
          
          <motion.p 
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We have been trusted and honored by a wide range of clients across government, education, and private sectors worldwide
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`group relative rounded-2xl p-6 text-center backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-gray-800/30 border-gray-700/50"
                  : "bg-white/50 border-white/50"
              }`}
            >
              <motion.div
                variants={iconHoverVariants}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                  isDarkMode ? "bg-blue-500/20 text-blue-300" : "bg-blue-500/10 text-blue-600"
                }`}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className={`text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent`}
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className={`text-sm font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {clientCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={category.delay}
              whileHover="hover"
              className="group relative"
            >
              {/* Main Card */}
              <motion.div
                variants={cardHoverVariants}
                className={`relative rounded-3xl p-6 lg:p-8 backdrop-blur-sm border-2 transition-all duration-500 h-full ${
                  isDarkMode
                    ? "bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30"
                    : "bg-white/70 border-white/50 hover:border-blue-300/50"
                }`}
                style={{
                  boxShadow: isDarkMode 
                    ? "0 8px 40px rgba(0,0,0,0.4)" 
                    : "0 8px 40px rgba(0,0,0,0.1)"
                }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkMode
                    ? "from-cyan-500/5 via-blue-500/5 to-purple-500/5"
                    : "from-blue-200/20 via-purple-200/20 to-cyan-200/20"
                }`} />

                {/* Shine Effect */}
                {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /> */}

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      variants={iconHoverVariants}
                      className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}
                    >
                      {category.icon}
                    </motion.div>
                    
                    <motion.div 
                      className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category.count}
                    </motion.div>
                  </div>

                  <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {category.category}
                  </h3>
                  
                  <p className={`text-sm lg:text-base leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {category.description}
                  </p>
                </div>

                {/* Floating Elements */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200`} />
              </motion.div>

              {/* Outer Glow */}
              <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 bg-gradient-to-r ${category.gradient}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p 
            className={`text-lg mb-6 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Join our growing family of satisfied clients
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            Become Our Client
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;