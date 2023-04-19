import Link from "next/link";
import {capitalize, getPathClass} from "../page.utils";

export interface NavlinkProps {
  name: string;
  pathName: string;
  onClick?: () => void;
  hideDecoration?: boolean;
  mode?: "mobile" | "large";
}

export default function Navlink(props: NavlinkProps) {
  const {name, pathName, hideDecoration, mode} = props;
  const pathClass = getPathClass(pathName, name);
  const decoration = hideDecoration ? "hideDecoration" : "";
  const mobileStyles = mode === "mobile" ? "dark:text-white" : "";

  return (
    <Link
      className={`text-xl text-[#666] hover:text-slate-950 dark:hover:text-white ${
        decoration ?? pathClass
      } ${mobileStyles}`}
      href={name === "home" ? "/" : `/${name}`}
    >
      {capitalize(name)}
    </Link>
  );
}
