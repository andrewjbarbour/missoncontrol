import Footer from "./components/footer";
import Navbar from "./components/navbar";
import {getTheme} from "./getTheme";
import "./globals.css";

import {Inconsolata} from "next/font/google";
import dynamic from "next/dynamic";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Andrew Barbour | Software Engineer",
  description:
    "I'm a full-stack developer passionate about building apps people love. Check out my work and get in touch through this site.",
  appleWebApp: {
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
    startupImage: ["./images/apple-touch-icon.png"],
  },
  icons: {
    icon: "./favicon.ico",
    apple: "./images/apple-touch-icon.png",
  },
};

const ThemedNavbar = dynamic(() => import("./components/navbar"), {
  ssr: false,
  loading: () => <Navbar />,
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: getTheme}} />
      </head>
      <body
        className={`flex flex-col w-screen h-screen ${inconsolata.className} dark:bg-dark-primary dark:text-white`}
      >
        <ThemedNavbar />
        <div className="flex-grow flex-shrink-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
