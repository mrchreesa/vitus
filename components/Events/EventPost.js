import React from "react";
import Image from "next/image";
import moment from "moment";
import { renderDescriptionWithLineBreaks } from "@/app/lib/funcs";
import ContactUs from "../ContactUs";

const EventPost = ({ event, contact }) => {
  // console.log(event.description);
  const date = moment(event.date).format("MMMM Do, YYYY, HH:mm ");

  return (
    <div className="mt-[10%] xl:mt-[8%]  mx-auto px-5 text-green max-w-[1300px]">
      <div className="flex flex-col md:flex-row max-h-[70vh]">
        <div className="mb-8 sm:mx-0 md:mb-16 md:w-1/2">
          <div className="shadow-md mt-10 md:mt-0 rounded-md transition-shadow duration-200 group-hover:shadow-lg sm:mx-0">
            <Image
              className="h-auto w-full rounded-md max-h-[500px] object-cover"
              width={2000}
              height={1000}
              alt={""}
              src={event.image}
              // sizes="100vw"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-14 flex flex-col ">
          <h1
            className=" mt-4 md:mt-0 mb-8 md:mb-2 text-3xl font-bold leading-tight
           md:text-5xl  2xl:text-6xl"
          >
            {event.name}
          </h1>
          <div className="flex flex-grow"></div>
          <div className=" max-w-2xl">
            <div className="mb-3">{event.location}</div>
            <div className="mb-3 text-lg">
              <div className="mb-14 text-lg">{date}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        {event.description?.length && (
          <div className="mt-48 md:mt-0 max-w-2xl mb-10">
            {renderDescriptionWithLineBreaks(event.description)}
          </div>
        )}
      </div>
      <ContactUs
        title={contact.title}
        description={contact.description}
        name={contact.name}
        email={contact.email}
        message={contact.message}
        submit={contact.submit}
      />
    </div>
  );
};

export default EventPost;
