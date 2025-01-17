import React, { useState, useEffect } from "react";
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
  IoIosArrowRoundForward as IoIosArrowRoundNext,
} from "react-icons/io";
import { BsDot } from "react-icons/bs"; // Importing the dot icon
import { motion } from "framer-motion";
import img1 from "../../assets/const.jpg";
import img2 from "../../assets/network.jpg";
import img3 from "../../assets/repaircomp.jpg";

const images = [img1, img2, img3];

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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="overflow-hidden relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-99 transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="container min-h-[650px] w-full">
        <div className="flex flex-col justify-center h-screen py-14 md:py-0 relative z-10 w-screen">
          <div className="w-1/2 mx-auto text-white">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl text-center lg:text-5xl font-bold !leading-snug"
            >
              QUALITY COMES FIRST
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-end mt-6"
            >
              <a href="#contact">
                <button className="primary-btn flex items-center gap-2 group">
                  Get In Touch
                  <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                </button>
              </a>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 items-center">
            <button
              onClick={prevSlide}
              className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 flex items-center"
            >
              <IoIosArrowRoundBack className="text-2xl" />
            </button>

            {/* Navigation Dots */}
            {images.map((_, index) => (
              <BsDot
                key={index}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer text-4xl ${
                  index === currentIndex ? "text-gray-800" : "text-gray-400"
                }`}
              />
            ))}

            <button
              onClick={nextSlide}
              className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 flex items-center"
            >
              <IoIosArrowRoundNext className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
