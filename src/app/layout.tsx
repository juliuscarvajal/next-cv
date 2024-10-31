import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { BackNav } from "@/components/back-nav";
import Link from "next/link";
import { TimeNow } from "@/components/time-now";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const archivoBlack = localFont({
  src: "./fonts/ArchivoBlack-Regular.ttf",
  variable: "--font-archivo-black",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Julius Carvajal's CV",
  description: "Julius Carvajal's CV",
};

const Footer = () => {
  return (
    <footer className="row-start-3 p-4 text-xs font-bold flex gap-6 flex-wrap items-center justify-center">
      <div className="flex divide-x gap-4 flex-wrap">
        <div className="pl-4 md:first:pl-0">ABN: 27 488 015 405</div>
        <div className="pl-4 md:first:pl-0">
          Email: juliuscarvajal21@gmail.com
        </div>
        <Link
          href="/projects"
          className="block underline underline-offset-4 pl-4 md:first:pl-0"
        >
          All Projects
        </Link>
      </div>
    </footer>
  );
};

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <BackNav />
      <div className="flex gap-2 items-center">
        <TimeNow />
        <DarkModeToggle className="justify-self-end" />
      </div>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} antialiased bg-background`}
      >
        <main>
          <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Nav />
            <div className="flex flex-col gap-8 row-start-2">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
