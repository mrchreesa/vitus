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
  return <EventsComponent events={filteredEvents} />;
};

export default EventsWrapper;
