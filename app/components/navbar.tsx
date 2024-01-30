"use client";
import * as React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Navlink from "./navlink";
import {IoMoonOutline} from "react-icons/io5";
import {IoSunnyOutline} from "react-icons/io5";
import MenuButton from "./menubutton";

const navPages = ["projects", "media", "contact"];

export default function Navbar() {
  const pathName = usePathname();
  const [mode, setMode] = React.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  const toggleMode = () => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "light");
      setMode("light");
      document.documentElement.classList.remove("dark");
    } else {
      setMode("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const modeClassName = `h-[50px] w-[50px] box-border border-2 border-transparent -mt-1 hover:border-[#020617] hover:border-2 dark:hover:border-white rounded-full cursor-pointer p-2 transition-all ease-in .3s select-none`;

  return (
    <nav className={`flex w-screen flex-shrink-0 sm:place-content-center p-8`}>
      <div className="w-5/6 sm:w-1/2">
        <Link href="/" className={`text-3xl`}>
          Andrew Barbour
        </Link>
      </div>
      <div className="w-1/2 hidden p-2 place-content-evenly lg:flex">
        {navPages.map(navPage => (
          <Navlink key={navPage} name={navPage} pathName={pathName} />
        ))}
      </div>
      <MenuButton />
      <div onClick={toggleMode}>
        {mode === "light" ? (
          <IoSunnyOutline className={modeClassName} />
        ) : (
          <IoMoonOutline className={modeClassName} />
        )}
      </div>
    </nav>
  );
}
