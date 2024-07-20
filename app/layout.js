import "./globals.css";


export const metadata = {
  metadataBase: new URL('https://centrevitus.com'),
  title: {
    default: "Counselling Centre Vitus",
    template: "%s - Centre Vitus",
  },
  description: "Providing individual and family counselling, oganisational training and supervision for professionals from the helping professions",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Counselling Centre Vitus",
    description: "Providing individual and family counselling, oganisational training and supervision for professionals from the helping professions",
    type: "website",
    siteName: "Counselling Centre Vitus", 

    // images: [
    //   {
    //     url: "https://ibb.co/SsvMVWZ",
       
    //     alt: "Preview of the website",
    //   },
    // ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return children;
}
