import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { 
  RiToolsLine,
  RiComputerLine,
  RiShoppingBasket2Line,
  RiFileList3Line
} from "react-icons/ri";
import { 
  MdConstruction,
  MdHandyman
} from "react-icons/md";
import { 
  GiWheat,
  GiCoffeeCup
} from "react-icons/gi";
import { 
  HiDocumentText
} from "react-icons/hi";

const ServicesData = [
  {
    id: 1,
    title: "Civil Works & Maintenance",
    desc: "Professional construction services, building maintenance, renovations, and infrastructure development",
    icon: <MdConstruction />,
    delay: 0.1,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: 2,
    title: "Computer & Hardware Maintenance",
    desc: "Expert computer repairs, hardware upgrades, system maintenance, and technical support",
    icon: <RiComputerLine />,
    delay: 0.2,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    title: "Grains & Beverages Supply",
    desc: "Quality food grains, fresh produce, and beverage supplies for businesses and institutions",
    icon: <GiWheat />,
    delay: 0.3,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: 4,
    title: "Office Consumables & Stationery",
    desc: "Complete range of office supplies, stationery items, and printing materials",
    icon: <HiDocumentText />,
    delay: 0.4,
    gradient: "from-purple-500 to-pink-600"
  }
];

const SlideUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

const Services = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`relative py-20 md:py-24 lg:py-32 transition-colors duration-300 overflow-hidden w-full ${
      isDarkMode ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100"
    }`} id="services">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? "bg-blue-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? "bg-purple-500" : "bg-purple-400"
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - More Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase ${
              isDarkMode 
                ? "text-blue-400 bg-blue-400/10" 
                : "text-blue-600 bg-blue-600/10"
            }`}>
              Our Services
            </span>
          </motion.div>
          
          <motion.h1 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Excellence in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Every Service
            </span>
          </motion.h1>
          
          <motion.p 
            className={`text-sm md:text-lg  mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-600 dark:text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
             From construction to technology, food supply to office essentials – we deliver comprehensive solutions tailored to your business needs
          </motion.p>
        </motion.div>

        {/* Services Grid - Refined & Balanced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ServicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={SlideUp(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
                isDarkMode 
                  ? "bg-gray-800/60 border-gray-700 hover:border-gray-600" 
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
              style={{
                boxShadow: isDarkMode 
                  ? "0 4px 24px rgba(0,0,0,0.2)" 
                  : "0 4px 24px rgba(0,0,0,0.08)",
              }}
            >
              {/* Subtle Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon - Perfectly Balanced */}
                <motion.div 
                  className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center text-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {service.icon}
                </motion.div>

                {/* Service Number - Subtle */}
                <div className={`absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                  isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                }`}>
                  0{index + 1}
                </div>

                {/* Content - Optimized Typography */}
                <h3 className={`text-lg font-bold mb-3 leading-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                  isDarkMode ? "text-gray-600 dark:text-gray-300 " : "text-gray-600"
                }`}>
                  {service.desc}
                </p>

                {/* Clean CTA */}
                {/* <div className={`flex items-center gap-2 text-sm font-medium ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                  <span>Learn more</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div> */}
              </div>

              {/* Subtle Corner Accents */}
              <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-gradient ${service.gradient}`} />
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-gradient ${service.gradient}`} />
            </motion.div>
          ))}
        </div>

        {/* Minimal CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            Explore All Services
          </motion.button>
        </motion.div> */}
      </div>

      {/* Add custom styles for gradient borders */}
      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(135deg, var(--tw-gradient-stops)) 1;
        }
      `}</style>
    </section>
  );
};

export default Services;