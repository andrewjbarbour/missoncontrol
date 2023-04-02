import Link from "next/link";
import {capitalize, getPathClass} from "../page.utils";

export interface NavlinkProps {
  name: string;
  pathName: string;
}

export default function Navlink(props: NavlinkProps) {
  const {name, pathName} = props;
  const pathClass = getPathClass(pathName, name);

  return (
    <Link
      className={`text-xl text-[#666] hover:text-slate-950 ${pathClass}`}
      href={`/${name}`}
    >
      {capitalize(name)}
    </Link>
  );
}
