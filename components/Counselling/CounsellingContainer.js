"use client";
import LandingPage from "./LandingPage";
import InfoSection from "./InfoSection";
import React from "react";
import ContactUs from "../ContactUs";

const CounsellingContainer = ({
  home,
  counselling,
  contact,
  address,
  vitusInfo,
}) => {
  return (
    <>
      <LandingPage home={home} address={address} />
      <div id="counselling">
        <InfoSection counselling={counselling} vitusInfo={vitusInfo} />
      </div>
      <ContactUs
        title={contact.title}
        description={contact.description}
        name={contact.name}
        email={contact.email}
        message={contact.message}
        submit={contact.submit}
      />
    </>
  );
};

export default CounsellingContainer;
