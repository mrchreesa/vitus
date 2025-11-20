"use client";

import React from "react";
import { motion } from "framer-motion";

const SupervisionInfoItem = ({ title, text, image, imageAlt, reverse }) => {
  const words = text.split(" "); // Split the string into an array of words by spaces
  const firstTwoWords = words.slice(0, 2).join(" "); // Join the first two words into a string
  const remainingWords = words.slice(2).join(" ");

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
      className={`wave flex flex-col h-full ${
        reverse ? "md:flex-row-reverse md:mr-10" : "md:flex-row md:pl-10"
      } w-full mt-20 md:mt-8 `}
    >
      <div className="w-full md:flex-1 flex items-center font-mont text-green">
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {title}
          </h2>
          <div className="text-base md:text-lg mb-4">
            <span className="font-bold mr-1">{firstTwoWords}</span>
            {remainingWords.split("\n\n").map((paragraph, i) => (
              <React.Fragment key={i}>
                {i === 0 ? (
                  <span className="inline">{paragraph}</span>
                ) : (
                  <p className="mt-4">{paragraph}</p>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-[45%] flex justify-center items-center md:p-10">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto object-cover"
        />
      </div>
    </motion.div>
  );
};

export default SupervisionInfoItem;
