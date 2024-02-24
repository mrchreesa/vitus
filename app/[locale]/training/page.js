import React from "react";
import TrainingComponent from "../../../components/Training/TrainingComponent";
import { getEvents } from "../../../sanity/sanity-utils";

const Training = async () => {
  const events = await getEvents();
  // console.log("events", events);
  return <TrainingComponent events={events} />;
};
export const dynamic = "force-dynamic";
export default Training;
