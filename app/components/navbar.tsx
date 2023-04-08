"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Navlink from "./navlink";
import {getPathClass} from "../page.utils";
import light from "../../public/images/light.svg";

const navPages = ["projects", "media", "about", "contact"];

export default function Navbar() {
  const pathName = usePathname();
  const pathClass = getPathClass(pathName);

  return (
    <nav className="flex w-screen flex-shrink-0 place-content-center p-8">
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
      <Image
        alt="Light"
        src={light}
        className={`max-h-[50px] min-h-[50px] box-border border-2 border-transparent -mt-1 hover:border-[#666]/50 hover:border-2 rounded-full cursor-pointer p-2 transition-all ease-in .3s`}
      ></Image>
    </nav>
  );
}
