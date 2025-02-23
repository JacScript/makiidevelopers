import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import mission from "../../assets/mission.png"
import vission from "../../assets/vission3.png"
import values from "../../assets/values1.png"

const ServicesData = [
  {
    id: 1,
    title: "OUR MISSION",
    desc: "To provide exceptional product and services by leveraging advanced techonolgy and inovation, addressing client challenges and making a positive impact on society by turning challenges into opportunities",
    link: "#",
    image: mission,
    delay: 0.2,
  },
  {
    id: 2,
    title: "OUR VISSION",
    desc:"To be leading company in addressing societal challenges through techonology, stationanry servces and civil construction project, while fostering sustainable developemnt locally and international",
    link: "#",
    image: vission,
    delay: 0.3,
  },
  {
    id: 3,
    title: "OUR CORE VALUES",
    desc: "Truthfulness, Availabilty, Trustworthiness,Excellence in Services And Innovation",
    link: "#",
    image: values,
    // icon: <RiComputerLine />,
    delay: 0.4,
  },
  // {
  //   id: 4,
  //   title: "Satisfied clients",
  //   link: "#",
  //   icon: <IoMdHappy />,
  //   delay: 0.5,
  // },
  // {
  //   id: 5,
  //   title: "SEO optimization",
  //   link: "#",
  //   icon: <IoPulseOutline />,
  //   delay: 0.6,
  // },
  // {
  //   id: 6,
  //   title: "24/7 support",
  //   link: "#",
  //   icon: <BiSupport />,
  //   delay: 0.7,
  // },
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
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white" id="mission">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold pb-10 text-center">
          Mission | Vission | Values

        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 ">
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"> */}
          {ServicesData.map((service, id) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              key={id}
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl h-80 w-80"
            >
              <div className="text-4xl mb-4 w-40 h-40 md:w-50 md:h-60 lg:w-20 lg:h-20">
                 <img className="w-full h-full object-cover rounded-lg" src={service.image} alt="" />
                 
                 </div>
              <h1 className="text-lg font-bold text-center px-3">
                {service.title}
              </h1>
              <h3 className="text-xs font-semibold text-center">
                {service.desc}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
