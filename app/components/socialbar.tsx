import Link from "next/link";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {MdEmail} from "react-icons/md";

export const socialBarIconStyles = `w-[35pt] h-[35pt] hover:scale-105`;

export default function SocialBar() {
  return (
    <div className="flex p-5">
      <Link className={socialBarIconStyles} href="mailto:barbouraj@gmail.com">
        <MdEmail className={socialBarIconStyles} />
      </Link>
      <Link
        className={socialBarIconStyles}
        href="https://github.com/andrewjbarbour"
      >
        <AiFillGithub className={socialBarIconStyles} />
      </Link>
      <Link href="https://www.linkedin.com/in/barbouraj/">
        <AiFillLinkedin className={socialBarIconStyles} />
      </Link>
    </div>
  );
}
