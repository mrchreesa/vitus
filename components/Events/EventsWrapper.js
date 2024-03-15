import React from "react";
import EventsComponent from "./EventsComponent";
import { getEvents } from "../../sanity/sanity-utils";

const EventsWrapper = async () => {
  const events = await getEvents();
  return <EventsComponent events={events} />;
};

export default EventsWrapper;
