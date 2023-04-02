import Link from "next/link";
import * as React from "react";

const navPages = ["projects", "media", "about", "contact"];

interface NavlinkProps {
  name: string;
}

export function Navlink(props: NavlinkProps) {
  const {name} = props;
  return (
    <Link
      className="text-xl text-[#666] hover:text-slate-950"
      href={`/${name}`}
    >
      {name[0].toLocaleUpperCase() + name.slice(1)}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="flex w-screen flex-shrink-0 p-8">
      <div className="w-1/2">
        <Link href="/" className="text-3xl">
          Andrew Barbour
        </Link>
      </div>
      <div className="w-1/2 flex p-2 place-content-evenly">
        {navPages.map(navPage => (
          <Navlink key={navPage} name={navPage} />
        ))}
      </div>
    </nav>
  );
}
