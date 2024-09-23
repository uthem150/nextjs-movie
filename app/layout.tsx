import Navigation from "../components/navigation";

export const metadata = {
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
