import React from "react";
import { useTranslations } from "next-intl";
import ContactsComponent from "@/components/Contacts/ContactsComponent";

const Contacts = () => {
  const k = useTranslations("Address");
  const t = useTranslations("Contacts");
  const j = useTranslations("ContactForm");
  const address = k("address");
  const contacts = {
    title: t("contacts"),
    phone: t("phone"),
    email: t("email"),
    address: t("address"),
  };
  const contact = {
    title: j("landing.title"),
    description: j("landing.description"),
    name: j("name"),
    email: j("email"),
    message: j("message"),
    submit: j("submit"),
  };
  return (
    <ContactsComponent
      address={address}
      contacts={contacts}
      contact={contact}
    />
  );
};

export default Contacts;
