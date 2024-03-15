"use client";
import React from "react";
import EventCard from "./EventCard";
import ReactFullpage from "@fullpage/react-fullpage";

const EventsComponent = ({ events, training }) => {
  // const onLeave = (origin, destination, direction) => {
  //   console.log("onLeave", { origin, destination, direction });
  //   // arguments are mapped in order of fullpage.js callback arguments do something
  //   // with the event
  // };
  return (
    <ReactFullpage
      //fullpage options

      navigation={true}
      navigationPosition="right"
      navigationTooltips={events.length}
      dragAndMove={true}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* <div
              className={
                "section fp-auto-height-responsive items-center h-screen-64"
              }
            >
            </div> */}
            {events.map((event, i) => (
              <div
                key={event._id}
                className={"section fp-auto-height-responsive items-center "}
              >
                <EventCard
                  index={i}
                  name={event.name}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  slug={event.slug}
                  url={event.url}
                />
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default EventsComponent;
