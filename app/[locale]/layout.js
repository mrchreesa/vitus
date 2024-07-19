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

export const metadata = {
  // metadataBase: new URL('https://centrevitus.com'),
  title: {
    default: "Centre Vitus",
    template: "%s - Centre Vitus",
  },
  description: "Providing individual and family counselling",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: [
      {
        url: "https://i.postimg.cc/3r6rFkPq/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Preview of the website",
      },
    ],
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
      className={`${mont.variable} font-sans ${typo.variable} font-sans`}
    >
      <head>
        {/* <title>{metadata.title}</title> */}
        <meta charSet="UTF-8" />
        <meta property="og:site_name" content="Centre Vitus" />
        <meta property="og:url" content="https://www.centrevitus.com" />
        {/* <meta name="description" content={metadata.description} /> */}
        {/* <link rel="icon" href={metadata.icons.icon} /> */}

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Centre Vitus" />
        <meta
          itemProp="description"
          content="Providing individual and family counselling"
        />
        <meta
          itemProp="image"
          content="https://i.postimg.cc/3r6rFkPq/opengraph-image.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.centrevitus.com/bg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Centre Vitus" />
        <meta
          property="og:description"
          content="Providing individual and family counselling"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/3r6rFkPq/opengraph-image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Centre Vitus" />
        <meta
          name="twitter:description"
          content="Providing individual and family counselling"
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/3r6rFkPq/opengraph-image.png"
        />

        <link rel="preload" href="/maze.jpeg" as="image" />
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
