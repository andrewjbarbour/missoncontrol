import Link from "next/link";
import Image from "next/image";
import {MainButton} from "./components/mainbutton";
import styles from "./page.module.css";
import profile from "../public/images/profile-pic.jpeg";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className="flex flex-row items-center">
        <Image
          alt="profile photo"
          className="rounded-full scale-75"
          src={profile}
        />
        <div>
          <h1 className="text-3xl mb-5 font-bold">{`Hi, I'm Andrew.`}</h1>
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
      </section>
    </main>
  );
}
