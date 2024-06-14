import React from "react";

const TrainingInfoItem = ({ title, text, image, imageAlt, reverse }) => {
  const paragraphs = text.split("\n\n");
  return (
    // Add `justify-center items-center` to center content. Use `mx-auto` to center the whole block horizontally.
    // `md:h-screen` ensures the container takes the full screen height at medium screens and above.
    <div
      className={`flex flex-col md:flex-row font-mont ${
        reverse ? "md:flex-row-reverse" : ""
      } 
      justify-center items-center mx-auto max-w-[1600px] w-full pt-10 md:h-screen`}
    >
      <div className="w-full md:w-1/2 flex justify-center items-center text-green p-6 md:p-10">
        <div>
          <h2 className="text-2xl md:text-2xl lg:text-2xl md:mt-20 font-bold mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-base md:text-[15px] mb-4 ">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="mb-0.3">
                {paragraph}
              </p>
            ))}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center md:p-10">
        <img
          src={image}
          alt={imageAlt}
          className="w-[90%] h-auto md:h-1/2 object-cover" // Adjust `md:h-1/2` as needed to control the image size on larger screens.
        />
      </div>
    </div>
  );
};

export default TrainingInfoItem;
