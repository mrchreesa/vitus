import React from "react";
import { getEvent } from "../../sanity/sanity-utils";
import EventPost from "./EventPost";

const EventPostWrapper = async ({ slug }) => {
  const event = await getEvent(slug);
  console.log(event);
  return <EventPost event={event} />;
};

export default EventPostWrapper;
