import Image from "next/image";
import concurrentReact from "../../public/images/concurrent-react.png";
import layers from "../../public/images/layers.png";
import propDescriptors from "../../public/images/property-descriptors.png";
import engineeringPoetics from "../../public/images/engineering-poetics.png";
import Link from "next/link";

const assetPath = "/assets";

const images = [
  {
    name: "Concurrent React",
    src: concurrentReact,
    href: `ConcurrentReact.pptx`,
  },
  {name: "Layers", src: layers, href: `CSSLayers.pptx`},
  {
    name: "Property Descriptors",
    src: propDescriptors,
    href: `PropertyDescriptors.pptx`,
  },
  {
    name: "Engineering Poetics",
    src: engineeringPoetics,
    href: `rise-of-thermodynamics.pdf`,
  },
];

export default function Media() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-3 ">
        {images.map(img => (
          <Link
            key={img.name}
            href={`assets/${img.href}`}
            className="flex flex-col justify-center items-center -mt-10"
          >
            <figure
              key={img.name}
              className="flex flex-col justify-center items-center"
            >
              <Image
                alt={img.name}
                src={img.src}
                className="bg-white"
                width={300}
                height={300}
                style={
                  img.name === "Property Descriptors"
                    ? {minHeight: "306px"}
                    : undefined
                }
              />
              <figcaption>{img.name}</figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Figure() {}
