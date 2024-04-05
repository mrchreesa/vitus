import React from "react";
import SupervisionInfoItem from "./SupervisionInfoItem";

const SupervisionInfoSection = ({ supervision }) => {
  // Images
  const supervisionImg = "/supervision.jpeg";

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
