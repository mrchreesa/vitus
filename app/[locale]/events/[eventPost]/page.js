import EventPostWrapper from "@/components/Events/EventPostWrapper";
import React from "react";
import { useTranslations } from "next-intl";
import { getEvent } from "@/sanity/sanity-utils";


export const generateMetadata = async ({ params }) => {
  const slug = params.eventPost;
  const event = await getEvent(slug);
  if (!event) {
    return 
  }
  return {
    title: event.name,
    description: event.description.substring(0, 160),
    openGraph: {
      title: event.name,
      description: event.description.substring(0, 160),
      type: 'article',
      images: [
        {
          url: event.image,
          width: 1200,
          height: 630,
          alt: event.name,
        },
      ],
    },
  }
}

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
