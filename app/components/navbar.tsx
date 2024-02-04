"use client";
import * as React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Navlink from "./navlink";
import {IoMoonOutline} from "react-icons/io5";
import {IoSunnyOutline} from "react-icons/io5";
import MenuButton from "./menubutton";
import {AiOutlineLoading} from "react-icons/ai";

const navPages = ["projects", "media", "contact"];

export default function Navbar() {
  const pathName = usePathname();

  const [theme, setTheme] = React.useState(global.window?.__theme || "light");

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    global.window.__onThemeChange = setTheme;
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
      <div onClick={toggleTheme}>
        {theme === "dark" ? (
          <IoMoonOutline className={modeClassName} />
        ) : global.window?.__theme ? (
          <IoSunnyOutline className={modeClassName} />
        ) : (
          <AiOutlineLoading
            className={`${modeClassName} animate-spin-fast opacity-0`}
          />
        )}
      </div>
    </nav>
  );
}
