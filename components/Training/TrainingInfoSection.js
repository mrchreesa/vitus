import React from "react";

const TrainingInfoSeciton = ({ training }) => {
  // Create an array of sections for dynamic rendering
  const sections = [
    {
      title: training.trainingForCPD.russianDolls.title,
      description: training.trainingForCPD.russianDolls.description,
    },
    {
      title: training.trainingForCPD.sandTrays.title,
      description: training.trainingForCPD.sandTrays.description,
    },
    {
      title: training.trainingForCPD.clientsCreativity.title,
      description: training.trainingForCPD.clientsCreativity.description,
    },
  ];
  const seminarForCouples = {
    title: training.couples.title,
    description: training.couples.description,
  };
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center ml-10 w-[95%] mt-8 md:mt-20">
      {sections.map((section, index) => (
        <div
          key={index}
          className="w-full md:w-1/3 flex items-start font-mont text-green"
        >
          <div className="p-8 ">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="text-base md:text-lg mb-2">{section.description}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center text-green animate-fadeInfinate">
        <p>Scroll Down for Events</p>
      </div>
    </div>
  );
};

export default TrainingInfoSeciton;
