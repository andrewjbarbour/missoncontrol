import Link from "next/link";
import * as React from "react";

const navPages = ["projects", "media", "about", "contact"];

interface NavlinkProps {
  name: string;
}

export function Navlink(props: NavlinkProps) {
  const {name} = props;
  return <Link href={`/${name}`}>{name.toLocaleUpperCase()}</Link>;
}

export default function Navbar() {
  return (
    <nav className="flex place-content center w-screen flex-shrink-0 p-8">
      <div className="w-1/2">
        <Link
          href="/"
          className="text-3xl hover:underline hover:underline-offset-8 decoration-2"
        >
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
