import Footer from "@/components/Footer";
import NavBar from "../../components/Navigation/NavBar";
import { useTranslations } from "next-intl";
import localFont from "next/font/local";

const mont = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
    },
    // {
    //   path: "../../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
    // },
  ],
  variable: "--font-mont",
});

const typo = localFont({
  src: [
    {
      path: "../../public/fonts/Typo-Thin.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Typo-Regular.otf",
      weight: "700",
    },
  ],
  variable: "--font-typo",
});
export const metadata = {
  title: "Centre Vitus",
  description: "Providing individual and family counselling",
  openGraph: {
    images: 'https://i.postimg.cc/DzHcq6yp/vitus-en.jpg',
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function LocaleLayout({ children, params: { locale } }) {
  // console.log(locale);
  const t = useTranslations("Nav");
  const navigation = [
    { name: t("aboutMe"), href: "/about", current: false },
    { name: t("blog"), href: "/blog", current: false },
    { name: t("events"), href: "/events", current: false },
    { name: t("services"), href: "/", current: false },
    { name: t("contacts"), href: "/contacts", current: false },
  ];
  const enquiry = t("enquiry");

  const j = useTranslations("Home");
  const services = {
    counselling: j("counselling"),
    business: j("business"),
    training: j("training"),
  };
  return (
    <html
      lang={locale}
      className={`${mont.variable} font-sans, ${typo.variable} font-sans`}
    >
      <head>
        <link rel="preload" href="/maze.jpeg" as="image" />
        <meta charSet="UTF-8" />
       
      </head>
      <body>
        <NavBar
          locale={locale}
          navigation={navigation}
          enquiry={enquiry}
          services={services}
        />

        {children}
        <Footer navigation={navigation} locale={locale} />
      </body>
    </html>
  );
}
