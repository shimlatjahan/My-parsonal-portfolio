import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "./components/Navbar";
import { personalInfo } from "@/lib/data";

import "./globals.css";



export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,

  description:
    "Portfolio of Shimlat Jahan Sonia, a Public Administration student at the University of Barishal and an aspiring frontend developer.",

  keywords: [
    "Shimlat Jahan Sonia",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
};

// ===================================
// ROOT LAYOUT
// ===================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth scroll-pt-24"
    >
      <body
        className="
          min-h-screen
          overflow-x-hidden
          bg-[#182541]
          font-sans
          text-slate-100
          antialiased
          selection:bg-violet-400/30
          selection:text-white
        "
      >

        {/* ==========================
            NAVIGATION BAR
        ========================== */}

        <Navbar />

        {/* ==========================
            MAIN CONTENT
        ========================== */}

        {children}

        {/* ==========================
            FOOTER
        ========================== */}

        <footer
          className="
            border-t
            border-white/10
            bg-[#1d2c49]
            py-10
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              items-center
              justify-between
              gap-6
              px-5
              text-center
              sm:px-8
              md:flex-row
              lg:px-12
            "
          >

            {/* FOOTER LOGO */}

            <Link
              href="/#home"
              className="
                text-2xl
                font-extrabold
                tracking-tight
                text-white
                transition-colors
                duration-300
                hover:text-violet-300
              "
            >
              Sonia
              <span className="text-violet-400">
                .
              </span>
            </Link>

            {/* COPYRIGHT */}

            <p className="text-sm text-slate-300">
              © 2026 {personalInfo.name}.
              All rights reserved.
            </p>

            {/* TECHNOLOGY */}

            <p className="text-sm text-slate-400">
              Built with{" "}
              <span className="font-semibold text-violet-300">
                Next.js
              </span>
              {" & "}
              <span className="font-semibold text-sky-300">
                Tailwind CSS
              </span>
            </p>

          </div>
        </footer>

      </body>
    </html>
  );
}