import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <div className="container w-5/6 min-h-screen pt-14 grid grid-cols-1 md:grid-cols-2 gap-2 space-y-6 md:space-y-0 mx-auto">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col w-full justify-center h-full"
        >
          <div className="text-center md:text-left rounded-2xl space-y-4 lg:pt-60 w-full bg-[#f4f4f4] text-black md:h-[520px] lg:h-full flex flex-col">
            <h1 className="lg:text-3xl  mg:text-xl font-bold !leading-snug px-2 text-center lg:py-4">
              About Our Construction Company
            </h1>
            <p className="px-2  max-lg:text-xs text-justify">
            For all of your commercial, industrial, and residential projects, you can rely on our staff of skilled and knowledgeable experts.  You are getting knowledgeable, skilled, and creative expertise when you choose Maki Developers.  We possess the expertise and ingenuity to make your concepts a reality.  Our top goal is making sure you are satisfied.  We firmly believe in creating enduring relationships.
            </p>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center w-full h-full items-center ">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://static.wixstatic.com/media/f7133f9895b24525a2ad16c1e778c9fa.jpg/v1/fill/w_490,h_675,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f7133f9895b24525a2ad16c1e778c9fa.jpg"
            alt=""
            // className="w-full object-cover drop-shadow"
            className="w-full h-full object-cover drop-shadow rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
