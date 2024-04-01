import { useTranslations } from "next-intl";
import CounsellingContainer from "../../components/Counselling/CounsellingContainer";

export default function Index() {
  const t = useTranslations("Home");
  const i = useTranslations("CounsellingServices");
  const j = useTranslations("ContactForm");
  const k = useTranslations("Address");

  const address = k("address");
  const contact = {
    title: j("landing.title"),
    description: j("landing.description"),
    name: j("name"),
    email: j("email"),
    message: j("message"),
    submit: j("submit"),
  };

  const counselling = {
    section1: {
      title: i("individualCounselling.title"),
      description: i("individualCounselling.description"),
    },
    section2: {
      title: i("familyCounselling.title"),
      description: i("familyCounselling.description"),
    },
    section3: {
      title: i("couplesCounselling.title"),
      description: i("couplesCounselling.description"),
    },
  };

  const home = {
    counselling: t("counselling"),
    business: t("business"),
    training: t("training"),
  };

  return (
    <>
      <CounsellingContainer
        home={home}
        counselling={counselling}
        contact={contact}
        address={address}
      />
    </>
  );
}
