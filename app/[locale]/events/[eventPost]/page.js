import EventPostWrapper from "@/components/Events/EventPostWrapper";
import React from "react";

const EventPost = ({ params }) => {
  const slug = params.eventPost;
  console.log(slug);
  return <EventPostWrapper slug={slug} />;
};

export default EventPost;
