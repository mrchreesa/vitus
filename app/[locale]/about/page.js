import React from "react";
import AboutComponent from "../../../components/About/AboutComponent";
import { useTranslations, useMessages } from "next-intl";

export const metadata = {
  title: "About",
  description: "About Centre Vitus",
 
};


const About = () => {
  const t = useTranslations("About");
  const messages = useMessages();
  const about = t("description");
  const title = t("title");
  const teamTitle = t("teamTitle");
  const team = messages.About?.team || [];
  const nadia = messages.About?.nadia || null;

  return <AboutComponent about={about} title={title} nadia={nadia} team={team} teamTitle={teamTitle} />;
};

export default About;
