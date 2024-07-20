import React from "react";
import EventsWrapper from "../../../components/Events/EventsWrapper";

export const metadata = {
  title: "Events",
  description: "Events Centre Vitus",

};

const Events = ({ params: { locale } }) => {
  return <EventsWrapper locale={locale} />;
};
export const dynamic = "force-dynamic";
export default Events;
