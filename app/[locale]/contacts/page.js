import React from "react";
import { useTranslations } from "next-intl";
import ContactsComponent from "@/components/Contacts/ContactsComponent";

const Contacts = () => {
  const k = useTranslations("Address");
  const t = useTranslations("Contacts");
  const address = k("address");
  const contacts = {
    title: t("contacts"),
    phone: t("phone"),
    email: t("email"),
    address: t("address"),
  };
  return <ContactsComponent address={address} contacts={contacts} />;
};

export default Contacts;
