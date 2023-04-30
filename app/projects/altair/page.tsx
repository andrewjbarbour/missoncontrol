import React from "react";
import {Figure} from "../../components/figure";

export default function Altair() {
  const descClassName = "w-4/5 md:w-[700px] pt-8 pb-8";
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className={descClassName}>
        At Altair, I am building cloud native data visualization and digital
        twin applications for the Altair One cloud platform with React,
        TypeScript, and ArangoDB.
      </p>
      <Figure src="aone_drive_model.png" caption="Altair One Drive" />
      <p className={descClassName}>
        I built the Plot Viewer for the Altair One Drive, a platform for
        sharing, visualizing, and running simiulations on engineering model
        files.
      </p>
      <Figure src="plotviewer.png" caption="Plot Viewer" />
      <p className={descClassName}>
        I have also worked extensively on the Altair One 3D Viewer for
        visualizing and running simulations with 3D engineering models from EVs
        to rockets.
      </p>
      <Figure src="3dviewer.png" caption="3D Viewer" />
      <p className={descClassName}>
        Recently, I played a leading role in developing a unified digital twin
        dashboard on Altair One from concept to MVP in a month, a unified
        solution for managing digital twin apps.
      </p>
      <Figure src="digitaltwin.png" caption="Digital Twin" />
    </div>
  );
}
