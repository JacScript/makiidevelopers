import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactConfig } from "./content.js";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaUser,
  FaLinkedin,
  FaGithub,
  FaTwitter 
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function ContactUs() {
  const form = useRef();
  const { isDarkMode } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      
      toast.success("🎉 Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      e.target.reset();
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.");
      console.error("Email sending failed:", error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: isDarkMode 
        ? "0 0 0 2px rgba(59, 130, 246, 0.5)" 
        : "0 0 0 2px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    tap: { scale: 0.95 },
    loading: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin />, href: contactConfig.YOUR_LINKEDIN, color: "hover:text-blue-400" },
    { icon: <FaGithub />, href: contactConfig.YOUR_GITHUB, color: "hover:text-gray-400" },
    { icon: <FaTwitter />, href: contactConfig.YOUR_TWITTER, color: "hover:text-blue-300" },
  ];

  return (
    <section id="contact" className={`py-20 lg:py-28 transition-colors duration-500 ${
      isDarkMode 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
            {/* <FaPaperPlane className="mr-2" /> */}
            Get In Touch
          </motion.span>

          <motion.h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </motion.h1>
          
          <motion.p 
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="lg:w-2/5"
          >
            <div className={`rounded-3xl p-8 lg:p-10 backdrop-blur-sm border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700/50"
                : "bg-white/70 border-white/50"
            } shadow-2xl`}>
              <h3 className={`text-2xl lg:text-3xl font-bold mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {/* Email */}
                <motion.a
                  href={`mailto:${contactConfig.YOUR_EMAIL}`}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                    isDarkMode 
                      ? "hover:bg-gray-700/50" 
                      : "hover:bg-white"
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:scale-110 transition-transform duration-300`}>
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}>Email</p>
                    <p className={`font-medium ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>{contactConfig.YOUR_EMAIL}</p>
                  </div>
                </motion.a>

                {/* Phone */}
                {contactConfig.YOUR_FONE1 && (
                  <motion.div
                    className={`flex items-center gap-4 p-4 rounded-2xl ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white`}>
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Phone</p>
                      <p className="font-medium">{contactConfig.YOUR_FONE1}</p>
                      {contactConfig.YOUR_FONE2 && (
                        <p className="font-medium">{contactConfig.YOUR_FONE2}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Location */}
                {contactConfig.YOUR_LOCATION && (
                  <motion.div
                    className={`flex items-center gap-4 p-4 rounded-2xl ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white`}>
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Location</p>
                      <p className="font-medium">{contactConfig.YOUR_LOCATION}</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Social Links */}
              <div className="border-t pt-8">
                <p className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl text-xl ${
                        isDarkMode 
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      } ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:w-3/5"
          >
            <div className={`rounded-3xl p-8 lg:p-10 backdrop-blur-sm border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700/50"
                : "bg-white/70 border-white/50"
            } shadow-2xl`}>
              <h3 className={`text-2xl lg:text-3xl font-bold mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                Send a Message
              </h3>

              <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Your Name
                    </label>
                    <motion.div
                      whileFocus="focus"
                      variants={inputVariants}
                    >
                      <input
                        className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none ${
                          isDarkMode
                            ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                            : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                        }`}
                        id="name"
                        name="user_name"
                        placeholder="Enter your name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Your Email
                    </label>
                    <motion.div
                      whileFocus="focus"
                      variants={inputVariants}
                    >
                      <input
                        className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none ${
                          isDarkMode
                            ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                            : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                        }`}
                        id="email"
                        name="user_email"
                        placeholder="Enter your email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    Your Message
                  </label>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                  >
                    <textarea
                      className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none resize-none ${
                        isDarkMode
                          ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                          : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      }`}
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  className={`w-full py-4 px-8 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover={isSubmitting ? "loading" : "hover"}
                  whileTap="tap"
                  animate={isSubmitting ? "loading" : ""}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="flex items-center gap-3"
                      >
                        <FaPaperPlane />
                        Send Message
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}