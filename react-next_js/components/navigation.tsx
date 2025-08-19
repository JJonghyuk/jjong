"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">about-us Page</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
