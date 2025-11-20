"use client";

import React from "react";
import { motion } from "framer-motion";

const InfoItem = ({ title, text, image, imageAlt, reverse }) => {
  const paragraphs = text.split("\n\n");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={` flex flex-col ${
        reverse ? "md:flex-row-reverse md:mr-10" : "md:flex-row md:pl-10"
      } w-full mt-8 md:mt-16`}
    >
      <div className="w-full md:flex-1  flex items-center font-mont text-green">
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {title}
          </h2>
          <div className="text-base md:text-lg mb-4 ">
            {paragraphs.map((paragraph, i) =>
              paragraph.startsWith("-") ? (
                <p key={i} className="mb-0.3 ml-3">
                  {paragraph}
                </p>
              ) : (
                <p key={i} className="mb-0.3">
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center md:p-10">
        <img
          src={image}
          alt={imageAlt}
          className="w-[70%] h-auto object-cover"
        />
      </div>
    </motion.div>
  );
};

export default InfoItem;
