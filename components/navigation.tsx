"use client"; //client에서 interactive하게 만들어질(hydrate될) components는 use client지시어를 맨 위에 가져야 함 -> 의미는 use hydrate
// use client코드가 없으면, 자바스크립트를 그만큼 다운받지 않아도 됨 -> 속도 상승

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
