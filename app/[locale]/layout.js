import Footer from "@/components/Footer";
import NavBar from "../../components/Navigation/NavBar";
import { useTranslations } from "next-intl";
import localFont from "next/font/local";
import Head from "next/head"; // Import Head from next/head

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
    images: "https://i.postimg.cc/3yjphgG2/vitus-en.jpg",
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
    <html lang={locale} className={`${mont.variable} font-sans ${typo.variable} font-sans`}>
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.centrevitus.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="centrevitus.com" />
        <meta property="twitter:url" content="https://www.centrevitus.com" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.openGraph.images} />

        <link rel="preload" href="/maze.jpeg" as="image" />
      </Head>
      <body>
        <NavBar locale={locale} navigation={navigation} enquiry={enquiry} services={services} />
        {children}
        <Footer navigation={navigation} locale={locale} />
      </body>
    </html>
  );
}
