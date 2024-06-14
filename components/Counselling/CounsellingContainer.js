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
  vision,
}) => {
  const handleScrollToSection = (e) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    const targetId = e.currentTarget.getAttribute("href").slice(1); // Remove '#' from the href to get the ID
    const element = document.getElementById("counselling");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 10; // Calculate the position with -50px offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <LandingPage
        home={home}
        address={address}
        handleScrollToSection={handleScrollToSection}
      />
      <div>
        <InfoSection
          counselling={counselling}
          vitusInfo={vitusInfo}
          vision={vision}
        />
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
