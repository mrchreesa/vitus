import React from "react";
import { getEvent } from "../../sanity/sanity-utils";
import EventPost from "./EventPost";

const EventPostWrapper = async ({ slug, contact }) => {
  const event = await getEvent(slug);
  return <EventPost event={event} contact={contact} />;
};

export default EventPostWrapper;
