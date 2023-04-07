import Link from "next/link";

export interface ButtonProps {
  href: string;
  text: string;
}

export function MainButton({href, text}: ButtonProps) {
  return (
    <div className="flex justify-center p-4 m-4 bg-black rounded-full text-white w-7/8">
      <Link href={href}>{text}</Link>
    </div>
  );
}
