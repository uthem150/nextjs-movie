"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  // 유저가 현재 머물고 있는 훅 url알려줌
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
