import React from "react";
import EventsComponent from "./EventsComponent";
import { getEvents } from "../../sanity/sanity-utils";

const EventsWrapper = async ({ locale }) => {
  const events = await getEvents();
  // Function to filter events by locale
  let filteredEvents;
  if (locale == "bg") {
    filteredEvents = events.filter((event) => event.language.bg === true);
  } else {
    filteredEvents = events.filter((event) => event.language.en === true);
  }
  if (!filteredEvents.length) {
    return (
      <div className="font-mont flex h-screen w-full justify-center items-center text-green">
        No upcoming events
      </div>
    );
  }
  return <EventsComponent events={filteredEvents} />;
};

export default EventsWrapper;
