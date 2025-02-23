import React, { useRef } from "react";
import { motion } from "framer-motion";
import { contactConfig } from "./content.js";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";


export default function ContactUs() {

  const form = useRef();



  const sendEmail = async (e) => {
    e.preventDefault();
  
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      toast.success("Message sent successfully");
      e.target.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Email sending failed:", error.text);
      e.target.reset();
    }
  };
  

  // const sendEmail = (e) => {
  //   e.preventDefault();

   
  //   emailjs.sendForm(
  //     import.meta.env.VITE_SERVICE_ID,
  //     import.meta.env.VITE_TEMPLATE_ID,
  //     form.current,
  //     import.meta.env.VITE_PUBLIC_KEY
  //   ).then(
  //       () => {
  //         toast.success("Messege sent successfully");
  //         e.target.reset();
  //       },
  //       (error) => {
  //         // console.log('FAILED...', error.text);
  //         toast.error("Messege sent successfully", error.text);
  //         e.target.reset();
  //       },
  //     );
  // };


  return (
    <section id="contact">
    <div className="container mx-auto px-4">
      {/* Heading Section */}
      <motion.div
        className="my-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <hr className="border-t-2 border-gray-300 w-1/4" />
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className="flex flex-col lg:flex-row gap-8 my-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:w-1/3">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Get in touch</h3>
          <address className="not-italic text-gray-600">
            <strong>Email:</strong> <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="text-blue-500">{contactConfig.YOUR_EMAIL}</a>
            <br />
            {contactConfig.YOUR_FONE1 && (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE1} <strong>|</strong> {contactConfig.YOUR_FONE2}
              </p>
            )}
          </address>
          <p className="text-gray-600 mt-4">{contactConfig.description}</p>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-2/3">
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="name"
                name="user_name"
                placeholder="Name"
                type="text"
                required
              />
              <input
                className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                name="user_email"
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <textarea
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </div>
    </section>
  );
}
