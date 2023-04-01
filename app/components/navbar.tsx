import Link from "next/link";
import * as React from "react";

export default function Navbar() {
  return (
    <div className="w-screen flex-shrink-0">
      <Link href="/" className="text-2xl">
        Andrew Barbour
      </Link>
    </div>
  );
}
