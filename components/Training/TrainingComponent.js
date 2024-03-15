import React from "react";
import TrainingInfoSeciton from "./TrainingInfoSection";
import ContactUs from "../Counselling/ContactUs";

const TrainingComponent = ({ training }) => {
  return (
    <>
      <TrainingInfoSeciton training={training} />
      <ContactUs />
    </>
  );
};

export default TrainingComponent;
