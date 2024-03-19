import React from "react";
import AboutComponent from "../../../components/About/AboutComponent";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  const about = t("description");
  const title = t("title");

  return <AboutComponent about={about} title={title} />;
};

export default About;
