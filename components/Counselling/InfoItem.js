import React from "react";

const InfoItem = ({ title, text, image, imageAlt, reverse }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse md:mr-10" : "md:flex-row md:ml-10"
      } w-full mt-8 md:mt-16`}
    >
      <div className="w-full md:flex-1 flex items-center font-mont text-green">
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg mb-4">{text}</p>
        </div>
      </div>
      <div className="w-full md:flex-1">
        {/* <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto md:h-full object-cover"
        /> */}
      </div>
    </div>
  );
};

export default InfoItem;
