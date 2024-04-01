import React from "react";
import TrainingInfoSeciton from "./TrainingInfoSection";
import ContactUs from "../ContactUs";
import { useTranslations } from "next-intl";

const TrainingComponent = ({ training }) => {
  const t = useTranslations("ContactForm");
  const title = t("trainings.title");
  const description = t("trainings.description");
  const name = t("name");
  const email = t("email");
  const message = t("message");
  const submit = t("submit");
  return (
    <>
      <TrainingInfoSeciton training={training} />
      <ContactUs
        title={title}
        description={description}
        name={name}
        email={email}
        message={message}
        submit={submit}
      />
    </>
  );
};

export default TrainingComponent;
