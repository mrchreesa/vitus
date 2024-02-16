import Counselling from "@/components/Counselling";
import { getLocale } from "next-intl/server";

export default function Home() {
  const locale = getLocale();
  console.log(locale);
  return <Counselling />;
}
