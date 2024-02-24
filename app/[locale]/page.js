import { useTranslations } from "next-intl";
import NavBar from "../../components/NavBar";
import CounsellingPage from "../../components/Counselling/CounsellingPage";

export default function Index() {
  const t = useTranslations("Home");
  const home = {
    counselling: t("counselling"),
    business: t("business"),
    training: t("training"),
  };

  return (
    <>
      <CounsellingPage home={home} />
    </>
  );
}
