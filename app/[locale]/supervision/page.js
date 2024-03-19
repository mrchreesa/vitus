import React from "react";
import SupervisionContainer from "../../../components/Supervision/SupervisionContainer";
import { useTranslations } from "next-intl";

const Supervision = () => {
  const t = useTranslations("Supervision");
  const supervision = {
    title: t("supervision.title"),
    description: t("supervision.description"),
  };
  return <SupervisionContainer supervision={supervision} />;
};

export default Supervision;
