import {usePathname} from "next/navigation";
import Navlink from "./navlink";

const menuLinks = ["home", "projects", "media", "contact"];

function getBorder(index: number) {
  return index === 0 ? `border-b border-t` : "border-b";
}

interface MenuProps {
  setExpanded: (expanded: boolean) => void;
}

export default function Menu({setExpanded}: MenuProps) {
  const pathName = usePathname();

  return (
    <div className="z-50 flex flex-col items-center content-center w-screen h-screen absolute bottom-0 left-0 top-[100px] bg-white dark:bg-dark-primary">
      {menuLinks.map((link, index) => {
        const border = getBorder(index);
        return (
          <div
            className={`flex place-content-center items-center w-11/12 h-[90px] mx-5 px-5 ${border} border-black`}
            key={link}
            onClick={() => setExpanded(false)}
          >
            <Navlink
              name={link}
              key={link}
              pathName={pathName}
              hideDecoration={true}
              mode="mobile"
            />
          </div>
        );
      })}
    </div>
  );
}
