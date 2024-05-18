import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import placeholder from "@/public/collection1.png";

const EventCard = ({
  name,
  date,
  location,
  description,
  image,
  slug,
  url,
  index,
}) => {
  // Parse the string into a Moment object
  const dateTime = moment.utc(date); // Use .utc() to parse in UTC mode
  // Extract and format year, month, day
  const year = dateTime.year();
  const month = dateTime.format("MMMM");
  const day = dateTime.date();

  // Format time
  const time = dateTime.format("HH:mm"); // Formats to HH:mm:ss

  // Function to truncate the text to the specified number of words
  const truncateText = (inputText, limit) => {
    const wordsArray = inputText.split(" "); // Split the text into an array of words
    if (wordsArray.length > limit) {
      return wordsArray.slice(0, limit).join(" ") + "..."; // Join the first 'limit' words and add ellipsis
    }
    return inputText; // Return the original text if it's within the limit
  };
  return (
    <div
      className={`h-screen w-screen flex  items-center justify-center  font-mont text-lg  `}
    >
      <div className=" flex flex-col w-full md:h-[80%] mt-28 md:mt-12 justify-center items-center rounded shadow-lg overflow-hidden sm:w-[70%] lg:w-1/2 max-w-[1200px]">
        <Image
          src={image || placeholder}
          alt=" image "
          width={400}
          height={400}
          className={`h-full w-full object-center  object-no-repeat object-cover rounded-t  overflow-hidden`}
        ></Image>
        <div className=" flex flex-col w-full md:flex-row">
          <div className="flex z-0 flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-green bg-opacity-50 rounded md:flex-col md:items-center md:justify-center md:w-1/">
            <div className="md:text-3xl">
              {month.toString().padStart(2, "0")}
            </div>
            <div className="md:text-6xl">{day.toString().padStart(2, "0")}</div>
            <div className="md:text-3xl">{year}</div>
            <div className="md:text-xl">{time}</div>
          </div>
          <div className="p-4 flex bg-white flex-col font-normal h-[50vh] xl:h-[45vh] max-h-[350px] overflow-hide text-gray-800 min-w-full md:w-3/4">
            <h1 className="mb-2 text-2xl font-bold md:w-[70%] xl:w-[80%] leading-tight mt-1 tracking-tight text-gray-800">
              {name}
            </h1>
            <p className="leading-snug opacity-80 line-clamp-[4] 2xl:line-clamp-[5] md:w-3/4 font-medium	text-md">
              {truncateText(description, 120)}
            </p>
            <div className="flex flex-grow"></div>
            <Link
              href={`/events/${slug}`}
              className="bg-greenLight w-max  hover:bg-green hover:text-white text-green font-bold py-2 px-4 rounded-full transition-all duration-200"
            >
              Прочети повече
            </Link>
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
