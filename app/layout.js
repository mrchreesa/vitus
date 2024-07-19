import "./globals.css";


export const metadata = {
  title: "Centre Vitus",
  description: "Providing individual and family counselling",
  openGraph: {
    images: 'https://i.postimg.cc/DzHcq6yp/vitus-en.jpg',
  },
  icons: {
    icon: "/vitus-en.jpg",
  },
};

export default function RootLayout({ children }) {
  return children;
}
