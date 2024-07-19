import "./globals.css";


export const metadata = {
  title: "Centre Vitus",
  description: "Providing individual and family counselling",
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
};

export default function RootLayout({ children }) {
  return children;
}
