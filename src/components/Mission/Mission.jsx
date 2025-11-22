import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3, CiStar } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiBullseye, BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ServicesData = [
  {
    id: 1,
    title: "OUR MISSION",
    desc: "To provide exceptional product and services by leveraging advanced techonolgy and inovation, addressing client challenges and making a positive impact on society by turning challenges into opportunities",
    link: "#",
    icon: <BiBullseye />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "OUR VISSION",
    desc: "To be leading company in addressing societal challenges through techonology, stationanry servces and civil construction project, while fostering sustainable developemnt locally and international",
    link: "#",
    icon: <MdOutlineRemoveRedEye />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "OUR CORE VALUES",
    desc: "Truthfulness, Availabilty, Trustworthiness,Excellence in Services And Innovation",
    link: "#",
    icon: <CiStar />,
    delay: 0.4,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

const CardHover = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -15,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const IconHover = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 200,
    }
  }
};

const Services = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="mission" className={`py-12 lg:py-20 transition-colors duration-500 overflow-hidden ${
      isDarkMode 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100"
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span 
            className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase border ${
              isDarkMode 
                ? "text-amber-300 bg-amber-500/10 border-amber-500/20" 
                : "text-amber-700 bg-amber-500/20 border-amber-500/30"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Foundation
          </motion.span>

          <motion.h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Mission, Vision & Values
          </motion.h1>
          
          <motion.p 
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Guiding principles that drive our innovation and commitment to excellence in every project we undertake
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
            {ServicesData.map((service, id) => (
              <motion.div
                key={id}
                variants={SlideLeft(service.delay)}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                className="group relative w-full max-w-sm"
              >
                {/* Main Card */}
                <motion.div
                  variants={CardHover}
                  className={`relative rounded-3xl flex flex-col items-center justify-center p-6 md:p-8 border-2 backdrop-blur-sm transition-all duration-500 h-96 w-full ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700/50 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10"
                      : "bg-white/70 border-white/50 hover:border-amber-300/50 hover:shadow-2xl hover:shadow-amber-500/20"
                  }`}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDarkMode
                      ? "from-amber-500/5 via-orange-500/5 to-rose-500/5"
                      : "from-amber-200/20 via-orange-200/20 to-rose-200/20"
                  }`} />
                  
                  {/* Shine Effect */}
                  {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /> */}

                  {/* Icon Container */}
                  <motion.div 
                    variants={IconHover}
                    className={`relative text-5xl mb-6 w-24 h-24 flex items-center justify-center rounded-2xl ${
                      isDarkMode
                        ? "bg-gray-700/50 text-amber-400"
                        : "bg-amber-100/50 text-amber-600"
                    }`}
                  >
                    {/* Icon Background Glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br blur-md transition-opacity duration-500 ${
                      isDarkMode
                        ? "from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100"
                        : "from-amber-300/40 to-orange-300/40 opacity-0 group-hover:opacity-100"
                    }`} />
                    <div className="relative">
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className={`text-xl md:text-2xl font-bold text-center mb-4 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-sm md:text-base text-center leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {service.desc}
                  </motion.p>

                  {/* Floating Elements */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${
                    isDarkMode ? "bg-amber-500/30" : "bg-amber-400/40"
                  } group-hover:scale-150 transition-transform duration-500`} />
                  <div className={`absolute -bottom-2 -left-2 w-4 h-4 rounded-full ${
                    isDarkMode ? "bg-orange-500/30" : "bg-orange-400/40"
                  } group-hover:scale-150 transition-transform duration-500 delay-100`} />
                </motion.div>

                {/* Outer Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-amber-500/20 to-orange-500/20"
                    : "bg-gradient-to-br from-amber-300/40 to-orange-300/40"
                }`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mt-16"
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className={`w-3 h-3 rounded-full ${
                isDarkMode ? "bg-amber-500/50" : "bg-amber-400/60"
              }`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: item * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;