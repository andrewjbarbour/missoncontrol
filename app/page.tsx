import Image from "next/image";
import {MainButton} from "./components/mainbutton";
import profile from "../public/images/profile-pic.jpeg";
import SocialBar from "./components/socialbar";

export default function Home() {
  return (
    <main className="flex flex-row content-center items-center h-full w-full ">
      <div className="w-1/3 flex place-content-center">
        <Image
          alt="profile photo"
          className="rounded-full min-h-260"
          style={{
            minWidth: "244px",
          }}
          height={300}
          src={profile}
        />
      </div>
      <div className="flex flex-col items-center content-center">
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
        <SocialBar />
      </div>
    </main>
  );
}
