import React from "react";
import AboutComponent from "../../../components/About/AboutComponent";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "About",
  description: "About Centre Vitus",
 
};


const About = () => {
  const t = useTranslations("About");
  const about = t("description");
  const title = t("title");

  return <AboutComponent about={about} title={title} />;
};

export default About;
