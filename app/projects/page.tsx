import Image from "next/image";
import Link from "next/link";
import aone from "../../public/images/altairone.png";
import altairlogo from "../../public/images/altair-logo-full.jpg";

export default function Projects() {
  return (
    <div className="flex justify-center items-center h-full">
      <Link href="/projects/altair">
        <div className="flex flex-col justify-center items-center -mt-20">
          <Image
            className="w-[150px] h-[35px] m-8"
            alt="Altair logo"
            src={altairlogo}
          />
          <Image className="w-10/12 md:w-3/5" alt="Altair" src={aone} />
        </div>
      </Link>
    </div>
  );
}
