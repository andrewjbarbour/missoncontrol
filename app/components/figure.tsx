import Image from "next/image";

export interface FigureProps {
  caption: string;
  src: string;
}

export function Figure({caption, src}: FigureProps) {
  return (
    <figure className="flex flex-col justify-center items-center">
      <Image
        className="min-w-4/5 md:w-[700px] border p-0 m-0"
        width={200}
        height={200}
        src={`/images/${src}`}
        alt={caption}
      />
      <figcaption className="pt-2 text-sm text-dark-text">{caption}</figcaption>
    </figure>
  );
}
