"use client";
import * as React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import Navlink from "./navlink";
import {getPathClass} from "../page.utils";

const navPages = ["projects", "media", "about", "contact"];

export default function Navbar() {
  const pathName = usePathname();
  const pathClass = getPathClass(pathName);

  return (
    <nav className="flex w-screen flex-shrink-0 p-8">
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
    </nav>
  );
}
