import Link from "next/link";
import {capitalize, getPathClass} from "../page.utils";

export interface NavlinkProps {
  name: string;
  pathName: string;
  onClick?: () => void;
  hideDecoration?: boolean;
}

export default function Navlink(props: NavlinkProps) {
  const {name, hideDecoration, pathName} = props;
  const pathClass = getPathClass(pathName, name);
  const decoration = hideDecoration ? "hideDecoration" : "";

  return (
    <Link
      className={`text-xl text-[#666] hover:text-slate-950 ${
        decoration ?? pathClass
      } dark:text-white`}
      href={name === "home" ? "/" : `/${name}`}
    >
      {capitalize(name)}
    </Link>
  );
}
