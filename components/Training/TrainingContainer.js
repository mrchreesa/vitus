import React from "react";
import TrainingComponent from "./TrainingComponent";
import { getEvents } from "../../sanity/sanity-utils";

const TrainingContainer = async ({ training }) => {
  const events = await getEvents();
  console.log(events);
  return <TrainingComponent events={events} training={training} />;
};

export default TrainingContainer;
