import React from "react";

const InfoItem = ({ title, text, image, imageAlt, reverse }) => {
  // const words = text.split(" "); // Split the string into an array of words by spaces
  // const firstTwoWords = words.slice(0, 2).join(" "); // Join the first two words into a string
  // const remainingWords = words.slice(2).join(" ");
  // function highlightMarkedWords(description) {
  //   // Regular expression to find words between the special symbols (*)
  //   const regex = /\*([^*]+)\*/g;
  //   return description.replace(regex, '<span class="font-semibold">$1</span>');
  // }

  // const highlightedDescription = highlightMarkedWords(text);
  const paragraphs = text.split("\n\n");
  return (
    <div
      className={` flex flex-col ${
        reverse ? "md:flex-row-reverse md:mr-10" : "md:flex-row md:pl-10"
      } w-full mt-8 md:mt-16`}
    >
      <div className="w-full md:flex-1  flex items-center font-mont text-green">
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg mb-4 ">
            {/* <span
              dangerouslySetInnerHTML={{ __html: highlightedDescription }}
            ></span> */}
            {/* <span className="font-bold mr-1">{firstTwoWords}</span>
            {remainingWords} */}
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
          className="w-[70%] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default InfoItem;
