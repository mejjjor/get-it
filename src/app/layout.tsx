import background from "/public/background.jpg";
import Image from "next/image";
import "~/styles/globals.css";
import localFont from "@next/font/local";
const myFont = localFont({ src: "../styles/Speedy.ttf" });

export default function Layout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body className={myFont.className}>
        <div className="fixed h-screen w-screen overflow-hidden -z-50">
          <Image
            alt="abstract background"
            src={background}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
