import TrainingComponent from "../../../components/Training/TrainingComponent";
import React from "react";
import { useTranslations } from "next-intl";

const Training = () => {
  const j = useTranslations("Training");
  const training = {
    trainingForCPD: {
      russianDolls: {
        title: j("TrainingsForCPD.russianDolls.title"),
        description: j("TrainingsForCPD.russianDolls.description"),
      },
      sandTrays: {
        title: j("TrainingsForCPD.sandTrays.title"),
        description: j("TrainingsForCPD.sandTrays.description"),
      },
      clientsCreativity: {
        title: j("TrainingsForCPD.clientsCreativity.title"),
        description: j("TrainingsForCPD.clientsCreativity.description"),
      },
    },
    couples: {
      title: j("SeminarForCouples.couplesSeminar.title"),
      description: j("SeminarForCouples.couplesSeminar.description"),
    },
    parentsSeminar: {
      title: j("parentsSeminar.title"),
      description: j("parentsSeminar.description"),
    },
  };
  return <TrainingComponent training={training} />;
};

export default Training;
