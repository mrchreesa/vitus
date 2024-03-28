import React from "react";
import InfoItem from "./InfoItem";

const InfoSection = ({ counselling }) => {
  // Images
  const placeImage = "../path-to-your-image/aetos-front.jpeg"; // Update with the correct path to your image
  const foodImage = "../path-to-your-image/food-image.jpeg"; // Update with the correct path to your image

  // Content for sections
  const section1 = {
    title: counselling.section1.title,
    text: counselling.section1.description,
    image: 1,
    imageAlt: "Individual counselling session",
    reverse: false,
  };

  const section2 = {
    title: counselling.section2.title,
    text: counselling.section2.description,
    image: 2,
    imageAlt: "Family counselling session",
    reverse: true, // Image on the right
  };

  const section3 = {
    title: counselling.section3.title,
    text: counselling.section3.description,
    image: 1,
    imageAlt: "Couples counselling session",
    reverse: false,
  };

  return (
    <>
      <InfoItem {...section1} />
      <div className="blob">
        <InfoItem {...section2} />
      </div>
      <div className="wave">
        <InfoItem {...section3} />
      </div>
    </>
  );
};

export default InfoSection;
