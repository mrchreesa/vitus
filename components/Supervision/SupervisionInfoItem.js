import React from "react";

const SupervisionInfoItem = ({ title, text, image, imageAlt, reverse }) => {
  const words = text.split(" "); // Split the string into an array of words by spaces
  const firstTwoWords = words.slice(0, 2).join(" "); // Join the first two words into a string
  const remainingWords = words.slice(2).join(" ");
  return (
    <div
      className={`wave flex flex-col h-full ${
        reverse ? "md:flex-row-reverse md:mr-10" : "md:flex-row md:pl-10"
      } w-full mt-8 `}
    >
      <div className="w-full md:flex-1 flex items-center font-mont text-green">
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg mb-4 ">
            <span className="font-bold mr-1">{firstTwoWords}</span>
            {remainingWords.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-0.3">
                {paragraph}
              </p>
            ))}
          </p>
        </div>
      </div>
      <div className="w-full md:w-[45%] flex justify-center items-center md:p-10">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default SupervisionInfoItem;
