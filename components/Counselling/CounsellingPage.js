"use client";
import { useState } from "react";
import LandingPage from "./LandingPage";

import React from "react";
import ContactUs from "./ContactUs";

const CounsellingPage = ({ home }) => {
  return (
    <>
      <LandingPage home={home} />

      <ContactUs />
    </>
  );
};

export default CounsellingPage;
