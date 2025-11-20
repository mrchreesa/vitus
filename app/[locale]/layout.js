import Footer from "@/components/Footer";
import NavBar from "../../components/Navigation/NavBar";
import { useTranslations } from "next-intl";
import localFont from "next/font/local";

const mont = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
    },
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

// export const metadata = {
//   // metadataBase: new URL('https://centrevitus.com'),
//   title: {
//     default: "Counselling Centre Vitus",
//     template: "%s - Centre Vitus",
//   },
//   description: "Providing individual and family counselling, oganisational training and supervision for professionals from the helping professions",
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     images: [
//       {
//         url: "https://i.postimg.cc/3r6rFkPq/opengraph-image.png",

//         alt: "Preview of the website",
//       },
//     ],
//   },
//   icons: {
//     icon: "/logo.png",
//   },
// };

export default function LocaleLayout({ children, params: { locale } }) {
  // console.log(locale);
  const t = useTranslations("Nav");
  const navigation = [
    { name: t("aboutMe"), href: "/about", current: false },
    { name: t("services"), href: "/", current: false },
    { name: t("events"), href: "/events", current: false },
    { name: t("blog"), href: "/blog", current: false },
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
      className={`${mont.variable} font-sans ${typo.variable} font-sans`}
    >
      <head>
        <meta charSet="UTF-8" />
        <link rel="preload" href="/maze.jpeg" as="image" />
       
        <meta
          property="og:image"
          content="https://centrevitus.com/opengraph-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
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
