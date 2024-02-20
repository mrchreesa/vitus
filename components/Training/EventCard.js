import React from "react";
import Image from "next/image";

const EventCard = ({ name, date, location, description, image, slug, url }) => {
  // Function to truncate the text to the specified number of words
  const truncateText = (inputText, limit) => {
    const wordsArray = inputText.split(" "); // Split the text into an array of words
    if (wordsArray.length > limit) {
      return wordsArray.slice(0, limit).join(" ") + "..."; // Join the first 'limit' words and add ellipsis
    }
    return inputText; // Return the original text if it's within the limit
  };
  return (
    <div className="mx-auto  h-full flex items-center justify-center px-8 my-10">
      <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        <Image
          src={image}
          alt=" image "
          width={800}
          height={400}
          className={`w-full h-64 bg-center bg-no-repeat bg-cover rounded-t  `}
        ></Image>
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">Jan</div>
            <div className="md:text-6xl">13</div>
            <div className="md:text-xl">7 pm</div>
          </div>
          <div className="p-4 font-normal h-[400px] overflow-hide text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
              {name}
            </h1>
            <p className="leading-normal ">{truncateText(description, 120)}</p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="w-1/2">{location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
