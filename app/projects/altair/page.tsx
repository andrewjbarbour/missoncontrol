"use client";
import Image from "next/image";
import React from "react";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";
import {capitalize} from "../../page.utils";

const slugs = ["digital twin", "plot viewer"];

const iconClassName = "min-w-[35px] min-h-[35px] relative";

export default function Altair() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);

  const iconHoverClass = hovered ? "flex" : "hidden";

  const rotate = (direction: "left" | "right") => {
    let nextIndex;
    if (direction === "left") {
      nextIndex = activeIndex + 1 < slugs.length ? activeIndex + 1 : 0;
    } else {
      nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slugs.length - 1;
    }
    setActiveIndex(nextIndex);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full select-none">
      <p className="w-4/5 md:w-[700px] p-5">
        At Altair, I am building cloud native data visualization and digital
        twin applications for the Altair One cloud platform with React,
        TypeScript, and ArangoDB.
      </p>
      <p className="w-4/5 md:w-[700px] p-5">
        I built the Plot Viewer for the Altair One Drive, a platform for
        sharing, visualizing, and running simiulations on engineering model
        files. I have also worked on Altair One 3D Viewer for visualizing 3D
        engineering models from EVs to rockets.
      </p>
      <p className="w-4/5 md:w-[700px] p-5">
        Recently, I played a leading role in developing a unified digital twin
        dashboard on Altair One from concept to MVP in a month, a unified
        solution for managing digital twin apps.
      </p>
      {slugs.map((slug, index) => (
        <div
          className="w-11/12 sm:w-2/5 flex flex-col"
          key={slug}
          style={{display: index === activeIndex ? "flex" : "none"}}
        >
          <div
            className="w-full flex justify-center items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <HiChevronLeft
              className={`${iconClassName} ${iconHoverClass} left-10 z-50`}
              onClick={() => rotate("left")}
            />
            <Image
              className="min-w-full border p-0 m-0"
              width={200}
              height={200}
              src={`/images/${slug.replaceAll(" ", "")}.png`}
              alt={slug}
            />
            <HiChevronRight
              className={`${iconClassName} ${iconHoverClass} right-10`}
              onClick={() => rotate("right")}
            />
          </div>
          <div className="text-center mt-2 text-dark-secondary">
            {capitalize(slug)}
          </div>
        </div>
      ))}
    </div>
  );
}
