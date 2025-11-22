import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { IoCalendarOutline, IoLocationOutline, IoPeople } from "react-icons/io5";

const AboutUs = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    // { number: "2019", label: "Established" },
    // { number: "Dar es Salaam", label: "Headquarters" },
    { number: "500+", label: "Happy Clients" , icon: <IoPeople />},
    { number: "24/7", label: "Support", icon: <IoLocationOutline /> },
    { number: "7", label: "Years Experience", icon: <IoCalendarOutline /> },
    { number: "100%", label: "Tanzanian Owned", icon: <IoPeople /> }
  ];

  return (
    <section id="aboutUs" className={`py-20 lg:py-28 transition-colors duration-300 ${
      isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100"
    }`}>
      <div className="w-full md:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
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
                           Our Story
                         </span>
                       </motion.div>
              
              <motion.h1 
                className={`text-4xl lg:text-5xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MakiDevelopers
                </span>
              </motion.h1>
            </div>

            {/* Story Points */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                  isDarkMode ? "bg-blue-400" : "bg-blue-600"
                }`} />
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  <span className="font-semibold">Maki Developers was founded in 2019</span> Established by visionary professionals committed to redefining how businesses receive and rely on innovative construction, ICT, and supply solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                  isDarkMode ? "bg-blue-400" : "bg-blue-600"
                }`} />
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  We are <span className="font-semibold">fully owned and operated by Tanzanians</span>,bringing local expertise together with international standards to deliver world-class construction, ICT, and supply services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                  isDarkMode ? "bg-blue-400" : "bg-blue-600"
                }`} />
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  Our mission is to be a <span className="font-semibold">trusted leader in construction, ICT, and essential supply services,</span>delivering innovative solutions that support business growth and operational excellence."
                </p>
              </motion.div>
            </div>
            

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-10 md:gap-20 max-md:flex-col"
              >

              {/* Feature 01 */}
                <div className=" rounded-lg p-4  transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div>
                      <IoCalendarOutline className={`text-3xl ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    </div>
                   
                    <div>
                      <h3 className={`text-base font-bold  ${isDarkMode ? "text-gray-900 dark:text-gray-100" : "text-black"}`}>
                       2019
                      </h3>
                      <p className={` ${isDarkMode ? "text-gray-900 dark:text-gray-100" : "text-black/80"} text-sm`}>
                        Established
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 02 */}
                <div className=" rounded-lg p-4 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <IoLocationOutline className={`text-3xl ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}  />
                    </div>
                    <div>
                      <h3 className={`text-base font-bold  ${isDarkMode ? "text-gray-900 dark:text-gray-100" : "text-black"}`}>
                        Moshi
                      </h3>
                      <p className={` ${isDarkMode ? "text-gray-900 dark:text-gray-100" : "text-black/80"} text-sm`}>
                        Headquarters
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-6 rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-gray-800 hover:bg-gray-700 border border-gray-700" 
                    : "bg-gray-50 hover:bg-white border border-gray-200"
                }`}
                style={{
                  boxShadow: isDarkMode 
                    ? "0 4px 20px rgba(0,0,0,0.3)" 
                    : "0 4px 20px rgba(0,0,0,0.08)"
                }}
              >

                <motion.div
                  className={`text-5xl flex justify-center mb-3 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                  whileHover={{ rotate: 15 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className={`text-2xl lg:text-3xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                  whileInView={{ 
                    scale: [0.8, 1.1, 1],
                    opacity: [0, 1, 1]
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1 
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.p
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutUs;