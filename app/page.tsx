import Image from "next/image";
import {MainButton} from "./components/mainbutton";
import styles from "./page.module.css";
import profile from "../public/images/profile-pic.jpeg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className="flex content-center items-center p-8 min-h-full"
        style={{flex: 1}}
      >
        <Image
          alt="profile photo"
          className="flex flex-col content-center items-center rounded-full"
          style={{
            marginTop: "-150px",
            marginLeft: "auto",
            marginRight: "auto",
            minHeight: "260px",
            minWidth: "244px",
          }}
          height={260}
          src={profile}
        />
      </div>
      <div
        className="flex flex-col items-center content-center "
        style={{flex: 2}}
      >
        <h1 className="text-3xl mb-10 font-bold">{`Hi, I'm Andrew.`}</h1>
        <p className="max-w-xl text-xl mb-5">
          {`I’m a software engineer working with TypeScript, React, and Node, along
        with many other technologies. I’m passionate about building dynamic and
        responsive web apps and software that people love. Right now, I'm
        developing lightweight data visualization and digital twin apps for the Altair One cloud
        platform.`}
        </p>
        <p className="max-w-xl text-xl">
          {`In my spare time, I enjoy sci fi, gardening, playing with my devilish cat, and hiking with my wife. If you are looking for someone to take on a development project or want to connect, send me a message.`}
        </p>
        <div className="flex justify-center mt-5">
          <MainButton href="/projects" text="REVIEW PROJECTS" />
          <MainButton href="/about" text="SEE RESUME" />
        </div>
      </div>
      <div className="" style={{flex: 1}} />
    </main>
  );
}
