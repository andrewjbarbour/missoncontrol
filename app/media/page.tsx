import Image from "next/image";
import concurrentReact from "../../public/concurrent-react.png";
import layers from "../../public/layers.png";
import propDescriptors from "../../public/property-descriptors.png";
import engineeringPoetics from "../../public/engineering-poetics.png";

const images = [
  {name: "Concurrent React", src: concurrentReact},
  {name: "Layers", src: layers},
  {name: "Property Descriptors", src: propDescriptors},
  {name: "Engineering Poetics", src: engineeringPoetics},
];

export default function Media() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-3">
        {images.map(img => (
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
            />
            <figcaption>{img.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Figure() {}
