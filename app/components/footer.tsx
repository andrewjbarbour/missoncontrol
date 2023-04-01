"use client";
import * as React from "react";

export default function Footer() {
  function handleClick() {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <footer className="flex flex-row place-content-between p-7  text-[#666] text-lg">
      <span>© {new Date().getFullYear()} Andrew Barbour</span>
      <div className="hover:cursor-pointer">
        <a onClick={handleClick}>↑</a>
      </div>
    </footer>
  );
}
