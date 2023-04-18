"use-client";

import * as React from "react";
import {IoMenu} from "react-icons/io5";
import Navlink from "./navlink";
import {usePathname} from "next/navigation";

const menuLinks = ["home", "projects", "media", "contact"];

interface MenuProps {
  setExpanded: (expanded: boolean) => void;
}

function Menu({setExpanded}: MenuProps) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="flex flex-col items-center content-center w-screen h-screen absolute bottom-0 left-0 top-[80px] bg-white">
      {menuLinks.map(link => (
        <div
          className="flex place-content-center w-screen h-[90px] border border-black"
          key={link}
          onClick={() => setExpanded(false)}
        >
          <Navlink name={link} key={link} pathName={pathName} />
        </div>
      ))}
    </div>
  );
}

export default function MenuButton() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      {expanded && <Menu setExpanded={setExpanded} />}
      <IoMenu
        className="min-w-[50px] min-h-[50px] box-border border-2 border-transparent -mt-1 mr-2 hover:border-[#020617] hover:border-2 rounded-full cursor-pointer p-2 transition-all ease-in .3s select-none lg:hidden"
        onClick={() => setExpanded(!expanded)}
      />
    </>
  );
}
