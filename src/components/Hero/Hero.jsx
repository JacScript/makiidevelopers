import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import pic from "../../assets/site.png"

export const FadeUp = (delay) => ({
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="relative h-dvh flex md:items-center justify-center overflow-hidden top-24">
      {/* Background with theme-aware gradient */}
      <div
        className="absolute inset-0 transition-colors duration-300"
        style={{
          background: isDarkMode
            ? 'linear-gradient(135deg, #1e3a8a 0%, #000000 50%, #1e1b4b 100%)'
            : 'linear-gradient(135deg, #3b82f6 0%, #ffffff 50%, #6366f1 100%)'
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDarkMode ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10  max-sm:pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={FadeUp(0.2)}
              initial="initial"
              animate="animate"
            >


              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span
                  className={`block ${isDarkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                >
                  Your Best Partner,
                </span>

                <span
                  className={`block mt-2 ${isDarkMode ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" : "text-blue-600"
                    }`}
                >
                  Not Just a Supplier
                </span>
              </h1>

              <motion.p
                variants={FadeUp(0.4)}
                initial="initial"
                animate="animate"
                className={`text-sm  mb-4 md:mb-8 leading-relaxed max-w-xl ${isDarkMode ? "text-gray-700 dark:text-gray-200" : "text-black"
                    } md:text-xl `}
              >
                We deliver a wide range of trusted services — from civil construction and reliable computer software & hardware maintenance, to quality grains and beverage supply, along with fast delivery of office consumables and stationery.
              </motion.p>

              {/* Divider Line */}
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                animate="animate"
                className="w-20 h-1 bg-blue-500 mx-auto lg:mx-0 my-8"
              />

              {/* CTA Button */}
              <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                animate="animate"
                className="flex justify-center lg:justify-start mb-3  md:mb-12"
              >
                <a href="#contact">
                  <button className="group bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-8 py-2 md:py-4 rounded-lg font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                    Get In Touch Now
                    <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </a>
              </motion.div>

              {/* Features - Small Cards Below CTA */}
              <motion.div
                variants={FadeUp(1)}
                initial="initial"
                animate="animate"
                className="lg:grid hidden sm:grid-cols-2 gap-4 max-w-xl  absolute lg:ml-44 lg:mt-8"
              >
                {/* Feature 01 */}
                <div className=" rounded-lg p-4 border border-gray-300/10 dark:border-gray-600/10 hover:border-blue-400/20 dark:hover:border-blue-400/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 text-white rounded-md w-8 h-8 flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                      01
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold ${isDarkMode ? "text-gray-900 dark:text-gray-100" : "text-black/80"}`}>
                        Civil Contractions
                      </h3>
                      <p className={`text-xs font-semibold ${isDarkMode ? "text-gray-900 dark:text-gray-100" : "text-black/60"}`}>
                        Tailored civil services
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 02 */}
                <div className=" rounded-lg p-4 border border-gray-300/10 dark:border-gray-600/10 hover:border-blue-400/20 dark:hover:border-blue-400/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 text-white rounded-md w-8 h-8 flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                      02
                    </div>
                    <div>
                      <h3 className={`text-sm font-semibold ${isDarkMode ? "text-gray-900 dark:text-gray-100" : "text-black/80"}`}>
                        Supply solutions
                      </h3>
                      <p className={`text-xs font-semibold ${isDarkMode ? "text-gray-900 dark:text-gray-100" : "text-black/60"}`}>
                        Intuitive interface
                      </p>
                    </div>
                  </div>
                </div>


              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Floating Image */}
          <motion.div
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Decorative circles behind */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-3xl"
              />

              {/* Main image container */}
              <div className="relative rounded-3xl p-8  shadow-2xl">
    {/* 1. Kifungashio (w-96 h-96) kimeondolewa 'overflow-hidden'.
      2. Kifungashio sasa ni 'relative' ili kuweka picha ndani yake kwa 'absolute'.
    */}
    <div className="w-96 h-96 rounded-2xl relative">
        
        {/*
          Picha imeboreshwa:
          - Imesagwa hadi 200% (w-[200%] h-[200%]).
          - Imewekwa katikati kabisa (top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2).
          - Hii inahakikisha kingo zote zinavuka mipaka ya fremu ya 96x96.
        */}
        <img 
            src={pic || "https://placehold.co/600x600/1D4ED8/FFFFFF?text=Scaled+PNG"} 
            alt="Scaled PNG extending out of frame" 
            className="absolute w-[200%] h-[200%] object-cover 
                       top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       rounded-2xl opacity-90 transition-all duration-500" 
            // Tumia opacity ili kufanya fremu ya gradient ionekane kidogo nyuma yake
        />
        
        {/* Overlay rahisi kuonesha mipaka halisi ya fremu (96x96) */}
        {/* <div className="absolute inset-0 rounded-2xl border-4 border-white/50 pointer-events-none z-10"></div> */}
        
    </div>

    {/* Floating accent elements (Zimehifadhiwa kama ulivyotoa) */}
    <motion.div
      animate={{
        x: [0, 10, 0],
        y: [0, -10, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute -top-4 -right-4 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg"
    >
      ✓
    </motion.div>

    <motion.div
      animate={{
        x: [0, -10, 0],
        y: [0, 10, 0]
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
      className="absolute -bottom-4 -left-4 bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg"
    >
      ★
    </motion.div>
</div>
            </motion.div>
          </motion.div>
        </div>

      </div>
      {/* Bottom decorative scroll indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-28 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;