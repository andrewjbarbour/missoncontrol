import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

import {Inconsolata} from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Andrew Barbour | Software Engineer",
  description:
    "I'm a full-stack developer passionate about building apps people love. Check out my work and get in touch through this site.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col w-screen h-screen ${inconsolata.className}`}
      >
        <Navbar />
        <div className="flex-grow flex-shrink-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
