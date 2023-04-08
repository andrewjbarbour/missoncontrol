import Link from "next/link";

export interface ButtonProps {
  href: string;
  text: string;
}

export function MainButton({href, text}: ButtonProps) {
  return (
    <div className="flex justify-center p-4 m-4 w-52 bg-black rounded-full text-white transition-all ease-in 3s hover:scale-110">
      <Link href={href}>{text}</Link>
    </div>
  );
}
