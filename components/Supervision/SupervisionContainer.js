import React from "react";
import SupervisionInfoSection from "./SupervisionInfoSection";
import ContactUs from "../Counselling/ContactUs";

const SupervisionContainer = ({ supervision }) => {
  return (
    <>
      <SupervisionInfoSection supervision={supervision} />
      <ContactUs />
    </>
  );
};

export default SupervisionContainer;
