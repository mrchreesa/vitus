import React from "react";
import SupervisionInfoItem from "./SupervisionInfoItem";

const SupervisionInfoSection = ({ supervision }) => {
  // Images
  const supervisionImg = "../path-to-your-image/russian-dolls-image.jpeg"; // Update with the correct path

  // Content for sections
  const section1 = {
    title: supervision.title,
    text: supervision.description,
    image: supervisionImg,
    imageAlt: "Supervision",
    reverse: false,
  };

  return (
    <>
      <SupervisionInfoItem {...section1} />
    </>
  );
};

export default SupervisionInfoSection;
