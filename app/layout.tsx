import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  // title은 문자열도 가능하고, 템플릿을 포함한 객체도 가능함
  title: {
    template: "%s | Next Movies", // 문자열로 된 title을 넣어주고, 옆에 Next Movies
    default: "Next Movies",
  },
  description: "Next.js로 만든 무비 웹",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
