import "./globals.css";

export const metadata = {
  title: "Centre Vitus",
  description: "Providing individual and family counselling",
  openGraph: {
    images: '/vitus-en.jpg',
  },
  icons: {
    icon: "/vitus-en.jpg",
  },
};

export default function RootLayout({ children }) {
  return children;
}
