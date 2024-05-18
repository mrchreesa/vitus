import EventPostWrapper from "@/components/Events/EventPostWrapper";
import React from "react";
import { useTranslations } from "next-intl";

const EventPost = ({ params }) => {
  const j = useTranslations("ContactForm");
  const contact = {
    title: j("contacts.title"),
    description: j("contacts.description"),
    name: j("name"),
    email: j("email"),
    message: j("message"),
    submit: j("submit"),
  };

  const slug = params.eventPost;
  return <EventPostWrapper slug={slug} contact={contact} />;
};

export default EventPost;
