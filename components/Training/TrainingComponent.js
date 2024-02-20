import React from "react";
import EventCard from "./EventCard";

const TrainingComponent = ({ events }) => {
  return (
    <div className="flex flex-col justify-center align-center bg-greenLight">
      {" "}
      {events.map((event) => (
        <EventCard
          key={event._id}
          name={event.name}
          date={event.date}
          location={event.location}
          description={event.description}
          image={event.image}
          slug={event.slug}
          url={event.url}
        />
      ))}
    </div>
  );
};

export default TrainingComponent;
