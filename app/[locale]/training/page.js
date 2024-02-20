import React from "react";
import TrainingComponent from "@/components/Training/TrainingComponent";
import { getEvents } from "@/sanity/sanity-utils";

const Training = async () => {
  const events = await getEvents();

  return <TrainingComponent events={events} />;
};

export default Training;
