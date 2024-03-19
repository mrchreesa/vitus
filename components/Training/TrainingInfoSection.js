import React from "react";
import TrainingInfoItem from "./TrainingInfoItem";

const TrainingInfoSection = ({ training }) => {
  // Images
  const russianDollsImage = "../path-to-your-image/russian-dolls-image.jpeg"; // Update with the correct path
  const sandTraysImage = "../path-to-your-image/sand-trays-image.jpeg"; // Update with the correct path
  const clientsCreativityImage =
    "../path-to-your-image/clients-creativity-image.jpeg"; // Update with the correct path

  // Content for sections
  const section1 = {
    title: training.trainingForCPD.russianDolls.title,
    text: training.trainingForCPD.russianDolls.description,
    image: russianDollsImage,
    imageAlt: "Russian dolls used in training",
    reverse: false,
  };

  const section2 = {
    title: training.trainingForCPD.sandTrays.title,
    text: training.trainingForCPD.sandTrays.description,
    image: sandTraysImage,
    imageAlt: "Sand trays used in training",
    reverse: true, // Image on the right
  };

  const section3 = {
    title: training.trainingForCPD.clientsCreativity.title,
    text: training.trainingForCPD.clientsCreativity.description,
    image: clientsCreativityImage,
    imageAlt: "Client's creativity in training",
    reverse: false,
  };

  const section4 = {
    title: training.couples.title,
    text: training.couples.description,
    image: null,
    imageAlt: "Seminar for couples",
    reverse: true,
  };

  return (
    <>
      <TrainingInfoItem {...section1} />
      <TrainingInfoItem {...section2} />
      <TrainingInfoItem {...section3} />
      <TrainingInfoItem {...section4} />
    </>
  );
};

export default TrainingInfoSection;
