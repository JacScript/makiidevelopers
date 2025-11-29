import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { CiCalendar } from "react-icons/ci";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100,
        delay: 0.5 
      }}
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <CountUpNumber value={value} duration={duration} />
        </motion.span>
      )}
    </motion.span>
  );
};

// CountUp Number Component
const CountUpNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace('+', '').replace('%', ''));
      const increment = end / (duration * 60); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60); // 60fps

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {value.includes('+') ? `${count}+` : value.includes('%') ? `${count}%` : count}
    </span>
  );
};

const SuccessStories = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Ministry of Constitution Hardware Supply",
      description: "Supply of hardware servers, desktops, laptops, UPS and interactive boards",
      tags: "Government",
      status: "Completed",
      year: "2022",
    },
    {
      id: 2,
      title: "UCSAF Framework Contract",
      description: "Supply of 435 computers and accessories",
      tags: "Defense",
      status: "Active",
      year: "2024",
    },
    {
      id: 3,
      title: "Software Licenses - Invicti Acunetix",
      description: "Premium security software licensing solution",
      tags: "Security",
      status: "Completed",
      year: "2023",
    }
  ];

  const stats = [
    { number: "20+", label: "Completed Projects", duration: 2 },
    { number: "18+", label: "Government Clients", duration: 1.5 },
    { number: "100%", label: "Success Rate", duration: 2.5 }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <section className={`py-20 lg:py-28 transition-colors duration-300 w-full ${
      isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100"
    }`}>
      <div className="w-full md:w-[80%] mx-auto px-4 sm:px-6 lg:px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.span 
            className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase ${
              isDarkMode 
                ? "text-blue-400 bg-blue-400/10" 
                : "text-blue-600 bg-blue-600/10"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Recent Success Stories
          </motion.span>
          
          <motion.h1 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold my-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Showcasing Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Latest Success
            </span>
          </motion.h1>
          
          <motion.p 
            className={`text-sm md:text-lg mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Showcasing our latest successful implementations and the trust placed by leading organizations
          </motion.p>
        </motion.div>

        {/* Projects Grid - 3 Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`group relative rounded-2xl p-6 transition-all duration-500 cursor-pointer ${
                isDarkMode 
                  ? "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700" 
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              }`}
              style={{
                boxShadow: isDarkMode 
                  ? "0 8px 32px rgba(0,0,0,0.3)" 
                  : "0 8px 32px rgba(0,0,0,0.1)"
              }}
            >
              <div className="flex justify-between items-center mb-4">
                {/* Project Icon */}
                <motion.div 
                  className="py-1 flex items-center justify-between"
                > 
                  <CiCalendar className="text-green-500 h-10 w-10" />
                  <p className={`text-gray-600 dark:text-gray-300 text-sm font-semibold ml-2 ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>{project.year}</p>
                </motion.div>

                {/* Status Badge */}
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === "Completed" 
                    ? "bg-green-500/20 text-green-600 border border-green-500/30" 
                    : "bg-blue-500/20 text-blue-600 border border-blue-500/30"
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <h3 className={`text-xl font-bold mb-4 leading-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                {project.title}
              </h3>
              
              <p className={` mb-6 leading-relaxed ${
                isDarkMode ? "text-gray-600 dark:text-gray-300" : "text-black/80"
              }`}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDarkMode 
                      ? "bg-gray-700 text-gray-300" 
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {project.tags}
                </motion.span>
              </div>

              {/* Corner Accents */}
              <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-blue-500`} />
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-purple-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section - Below Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="text-center"
              >
                
                
                {/* Animated Counter */}
                <motion.div
                  className={`text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
                >
                  <AnimatedCounter value={stat.number} duration={stat.duration} />
                </motion.div>
                
                <motion.p 
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;