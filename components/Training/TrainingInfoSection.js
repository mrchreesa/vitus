import React from "react";
import TrainingInfoItem from "./TrainingInfoItem";

const TrainingInfoSection = ({ training }) => {
  const russianDollsImage = "/Matryoshka.jpg";
  const sandTraysImage = "/Sand.jpg";
  const clientsCreativityImage = "/Creativity.jpg";
  const hold = "/Hold.jpg";
  const parents = "/parents.jpeg";
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
    image: hold,
    imageAlt: "Seminar for couples",
    reverse: true,
  };

  const section5 = {
    title: training.parentsSeminar.title,
    text: training.parentsSeminar.description,
    image: parents,
    imageAlt: "Seminar for parants and teens",
    reverse: false,
  };

  return (
    <>
      <div className="blob pt-16 md:pt-0">
        <TrainingInfoItem {...section1} />
      </div>

      <TrainingInfoItem {...section2} />
      <div className="blob">
        <TrainingInfoItem {...section3} />
      </div>
      <div className="blob">
        <TrainingInfoItem {...section4} />
      </div>
      <div className="wave py-10">
        <TrainingInfoItem {...section5} />
      </div>
    </>
  );
};

export default TrainingInfoSection;
