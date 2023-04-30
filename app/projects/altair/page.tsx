import Image from "next/image";
import React from "react";

export default function Altair() {
  const descClassName = "w-4/5 md:w-[700px] pt-8 pb-8";
  const imageProps = {
    className: "min-w-4/5 md:w-[700px] border p-0 m-0",
    width: 200,
    height: 200,
  };

  return (
    <div className="flex flex-col justify-center items-center h-full select-none">
      <p className={descClassName}>
        At Altair, I am building cloud native data visualization and digital
        twin applications for the Altair One cloud platform with React,
        TypeScript, and ArangoDB.
      </p>
      <Image
        {...imageProps}
        src={`/images/aone_drive_model.png`}
        alt="Altair One Drive"
      />
      <p className={descClassName}>
        I built the Plot Viewer for the Altair One Drive, a platform for
        sharing, visualizing, and running simiulations on engineering model
        files.
      </p>

      <Image {...imageProps} src={`/images/plotviewer.png`} alt="Plot Viewer" />
      <p className={descClassName}>
        I have also worked extensively on the Altair One 3D Viewer for
        visualizing and running simulations with 3D engineering models from EVs
        to rockets.
      </p>
      <Image {...imageProps} src={`/images/3dviewer.png`} alt="3D Viewer" />
      <p className={descClassName}>
        Recently, I played a leading role in developing a unified digital twin
        dashboard on Altair One from concept to MVP in a month, a unified
        solution for managing digital twin apps.
      </p>
      <Image
        {...imageProps}
        src={`/images/digitaltwin.png`}
        alt="Digital Twin"
      />
    </div>
  );
}
