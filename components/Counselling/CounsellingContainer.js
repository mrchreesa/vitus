"use client";
import { useState } from "react";
import LandingPage from "./LandingPage";
import InfoSection from "./InfoSection";
import React from "react";
import ContactUs from "./ContactUs";

const CounsellingContainer = ({ home, counselling }) => {
  return (
    <>
      <LandingPage home={home} />
      <InfoSection counselling={counselling} />
      <ContactUs />
    </>
  );
};

export default CounsellingContainer;
