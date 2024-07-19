import React from "react";
import EventsWrapper from "../../../components/Events/EventsWrapper";


const Events = ({ params: { locale } }) => {
  return <EventsWrapper locale={locale} />;
};
export const dynamic = "force-dynamic";
export default Events;
