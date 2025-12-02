"use client";

import React from "react";
import { motion } from "framer-motion";
import niki from "../../public/Niki.jpg";
import Nad from "../../public/Nadia.jpg";
import Te from "../../public/Te.jpg";
import Bo from "../../public/Bo.jpg";
import De from "../../public/De.jpg";
import Al from "../../public/Al.jpg";
import Ma from "../../public/Ma.jpg";
import Maria from "../../public/Maria_converted.jpg";
import Ina from "../../public/Ina.PNG";

const AboutComponent = ({ about, title, nadia, team, teamTitle }) => {
  const paragraphs = about.split("\n\n");

  const images = {
    Te,
    Bo,
    De,
    Al,
    Ma,
    Maria,
    Ina,
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div id="about" className="overflow-hidden bg-white pt-16 lg:pt-0">
      {/* Hero Section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 py-12 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center lg:py-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:py-24 xl:py-32"
            >
              <motion.h2
                variants={fadeInUp}
                className="mt-10 text-3xl font-extrabold tracking-tight text-green sm:text-4xl md:mt-0 text-center lg:text-left"
              >
                {title}
              </motion.h2>
              <div className="mt-6 text-center lg:text-left">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    variants={fadeInUp}
                    className="mt-4 text-lg text-gray-600 leading-relaxed"
                    key={index}
                  >
                    {paragraph.split("\n").map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        {lineIndex < paragraph.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="relative lg:col-span-6 lg:h-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-full"
            >
              <img
                className="w-full h-auto object-cover shadow-lg rounded-b-[3rem] lg:absolute lg:inset-0 lg:h-full lg:rounded-none lg:rounded-bl-[50px]"
                src={niki.src}
                alt="Nikolina Angelova"
              />
              {/* Decorative element */}
              <div className="hidden lg:block absolute inset-y-0 left-0 -ml-4 w-4 bg-green opacity-20 rounded-l-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Nadia Stoykova Section */}
      {nadia && (
        <div className="relative bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 py-12 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center lg:py-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:py-24 xl:py-32"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="mt-10 text-3xl font-extrabold tracking-tight text-green sm:text-4xl md:mt-0 text-center lg:text-left"
                >
                  {nadia.name}
                </motion.h2>
                <div className="mt-6 text-center lg:text-left">
                  {nadia.description.split("\n\n").map((paragraph, index) => (
                    <motion.p
                      variants={fadeInUp}
                      className="mt-4 text-lg text-gray-600 leading-relaxed"
                      key={index}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
              </div>
            </motion.div>
          </div>
          <div className="relative lg:col-span-6 lg:h-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-full"
            >
              <img
                className="w-full h-auto object-cover shadow-lg rounded-b-[3rem] lg:absolute lg:inset-0 lg:h-full lg:rounded-none lg:rounded-bl-[50px]"
                src={Nad.src}
                alt="Д-р Надя Стойкова"
              />
              {/* Decorative element */}
              <div className="hidden lg:block absolute inset-y-0 left-0 -ml-4 w-4 bg-green opacity-20 rounded-l-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>
      )}

      {/* Team Section */}
      {team && team.length > 0 && (
        <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 text-center lg:text-left lg:px-8 lg:max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative mb-16 text-center"
            >
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-green sm:text-4xl">
                {teamTitle}
              </h2>
              <div className="mt-4 max-w-3xl mx-auto">
                <div className="h-1 w-20 bg-green mx-auto rounded-full"></div>
              </div>
            </motion.div>

            <div className="space-y-24">
              {team.map((member, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  key={index}
                  className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center"
                >
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden aspect-[3/4] transform transition duration-500 hover:scale-[1.02]">
                      <img
                        className="w-full h-full object-cover"
                        src={images[member.image].src}
                        alt={member.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div
                    className={`mt-10 lg:mt-0 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-green tracking-tight">
                      {member.name}
                    </h3>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutComponent;
