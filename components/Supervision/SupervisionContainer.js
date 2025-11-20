import React from "react";
import SupervisionInfoSection from "./SupervisionInfoSection";
import ContactUs from "../ContactUs";
import { useTranslations } from "next-intl";

const SupervisionContainer = ({ supervision }) => {
  const t = useTranslations("ContactForm");
  const title = t("supervision.title");
  const description = t("supervision.description");
  const name = t("name");
  const email = t("email");
  const message = t("message");
  const submit = t("submit");
  return (
    <div className="flex flex-col h-full mt-20">
      <SupervisionInfoSection supervision={supervision} />
      <ContactUs
        title={title}
        description={description}
        name={name}
        email={email}
        message={message}
        submit={submit}
      />
    </div>
  );
};

export default SupervisionContainer;
