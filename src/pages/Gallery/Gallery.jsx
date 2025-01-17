 "use client";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import Navbar from "../../components/navbar/Navbar";
import pic01 from "../../assets/pic1.jpg"
import pic02 from "../../assets/pic2.jpg"
import pic03 from "../../assets/pic3.jpg"
import pic04 from "../../assets/pic4.jpg"
import pic05 from "../../assets/pic5.jpg"
import pic06 from "../../assets/pic6.jpg"
import pic07 from "../../assets/pic7.jpg"
import pic08 from "../../assets/pic8.jpg"
import Footer from '../../components/Footer/Footer'


const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  images: [
    {
      src: pic01,
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: pic02,
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: pic03,
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: pic04,
      alt: "Model wearing plain white basic tee.",
    },
    {
      src: pic05,
      alt: "Model wearing plain white basic tee.",
    },
    {
      src: pic06,
      alt: "Model wearing plain white basic tee.",
    },
    {
      src: pic07,
      alt: "Model wearing plain white basic tee.",
    },{
      src: pic08,
      alt: "Model wearing plain white basic tee.",
    },
  ],
};

export default function Gallery() {
 

  return (
    <div className="bg-white">
      <Navbar />
      <div className="md:py-6 py-0 max-md:px-4">

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className=" max-md:mb-4 size-full rounded-lg object-cover lg:block"
          />
          <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={product.images[1].alt}
              src={product.images[1].src}
              className=" max-md:mb-4 aspect-[3/2] w-full rounded-lg object-cover"
            />
            <img
              alt={product.images[2].alt}
              src={product.images[2].src}
              className="max-md:mb-4 aspect-[3/2] w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={product.images[3].alt}
            src={product.images[3].src}
            className="max-md:mb-4 aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={product.images[4].alt}
            src={product.images[4].src}
            className="max-md:mb-4 size-full rounded-lg object-cover lg:block"
          />
          <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={product.images[5].alt}
              src={product.images[5].src}
              className="max-md:mb-4 aspect-[3/2] w-full rounded-lg object-cover"
            />
            <img
              alt={product.images[6].alt}
              src={product.images[6].src}
              className="max-md:mb-4 aspect-[3/2] w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={product.images[7].alt}
            src={product.images[7].src}
            className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
