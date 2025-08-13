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
          <Link href="/jj">JJ Page</Link> {path === "/jj" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
