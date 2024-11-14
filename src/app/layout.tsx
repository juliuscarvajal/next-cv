import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { BackNav } from "@/components/back-nav";
import { TimeNow } from "@/components/time-now";
import { NavLink } from "@/components/nav-link";
import { servicesOffered } from "@/constants/servicesOffered";
import { profileCopyText } from "@/constants/profile";

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
  title: `${profileCopyText.header.title} ${profileCopyText.header.subtitle}`,
  description: profileCopyText.body.join(" "),
  keywords: servicesOffered,
};

const Footer = () => {
  return (
    <>
      <footer className="row-start-3 p-4 text-xs font-bold">
        <div className="flex gap-2 md:gap-8 flex-wrap justify-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">All Projects</NavLink>
          <NavLink href="/projects/commercial">Commercial</NavLink>
          <NavLink href="/projects/personal">Personal</NavLink>
          <NavLink href="/projects/contact">Contact me</NavLink>
        </div>
      </footer>
    </>
  );
};

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <BackNav />
      <div className="flex gap-2 items-center">
        <TimeNow className="flex flex-col items-end text-sm text-muted-foreground font-bold" />
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
          <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-4 pt-8 md:p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Nav />
            <div className="flex flex-col gap-8 row-start-2">{children}</div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
