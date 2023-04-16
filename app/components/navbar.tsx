"use client";
import * as React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Navlink from "./navlink";
import {getPathClass} from "../page.utils";
import {IoMoonOutline} from "react-icons/io5";
import {IoSunnyOutline} from "react-icons/io5";

const navPages = ["projects", "media", "about", "contact"];

export default function Navbar() {
  const pathName = usePathname();
  const pathClass = getPathClass(pathName);
  const [mode, setMode] = React.useState("light");

  const toggleMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
    console.log("nextMode", nextMode);
    localStorage.setItem("theme", nextMode);
    if (nextMode == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const modeClassName = `max-h-[50px] min-h-[50px] min-w-[50px] max-w-[50px] box-border border-2 border-transparent -mt-1 hover:border-[#020617] hover:border-2 rounded-full cursor-pointer p-2 transition-all ease-in .3s select-none`;

  return (
    <nav className={`flex w-screen flex-shrink-0 place-content-center p-8`}>
      <div className="w-1/2">
        <Link href="/" className={`text-3xl ${pathClass}`}>
          Andrew Barbour
        </Link>
      </div>
      <div className="w-1/2 flex p-2 place-content-evenly">
        {navPages.map(navPage => (
          <Navlink key={navPage} name={navPage} pathName={pathName} />
        ))}
      </div>
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
