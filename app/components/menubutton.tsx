"use-client";
import * as React from "react";
import {IoMenu} from "react-icons/io5";
import Menu from "./menu";

export default function MenuButton() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      {expanded && <Menu setExpanded={setExpanded} />}
      <IoMenu
        className="min-w-[50px] min-h-[50px] box-border border-2 border-transparent -mt-1 mr-2 hover:border-[#020617] dark:hover:border-white hover:border-2 rounded-full cursor-pointer p-2 transition-all ease-in .3s select-none lg:hidden"
        onClick={() => setExpanded(!expanded)}
      />
    </>
  );
}
