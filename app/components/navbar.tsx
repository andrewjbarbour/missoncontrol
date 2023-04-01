import Link from "next/link";
import * as React from "react";

export default function Navbar() {
  return (
    <div className="w-screen flex-shrink-0 p-8">
      <Link
        href="/"
        className="text-3xl hover:underline hover:underline-offset-8 decoration-2"
      >
        Andrew Barbour
      </Link>
    </div>
  );
}
