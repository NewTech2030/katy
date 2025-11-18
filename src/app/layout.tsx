import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gipson Steel, Inc.",
  description:
    "AISC-certified structural steel fabricator providing medium to heavy structural and miscellaneous steel fabrication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-tight text-sky-400 hover:text-sky-300"
                >
                  Gipson Steel, Inc.
                </Link>
                <p className="text-xs font-medium text-slate-300">
                  AISC Certified · Structural Steel Fabrication
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 text-right text-xs sm:text-sm">
                <a
                  href="tel:6014825131"
                  className="font-medium text-sky-400 hover:text-sky-300"
                >
                  601.482.5131
                </a>
                <p className="text-slate-400">
                  2770 Sellers Dr. · Meridian, Mississippi 39301
                </p>
              </div>
            </div>
            <nav className="border-t border-slate-800/80 bg-slate-900/80">
              <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-2 text-sm lg:px-6">
                <Link
                  href="/"
                  className="rounded-full px-3 py-1 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="rounded-full px-3 py-1 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full px-3 py-1 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  Projects
                </Link>
                <Link
                  href="/clients"
                  className="rounded-full px-3 py-1 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  Clients
                </Link>
                <Link
                  href="/employment-opportunities"
                  className="rounded-full px-3 py-1 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  Employment Opportunities
                </Link>
                <Link
                  href="/contact"
                  className="ml-auto rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-sky-400"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-1 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
            {children}
          </main>

          <footer className="border-t border-slate-800 bg-slate-950/90">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-6">
              <p>
                © {new Date().getFullYear()} Gipson Steel, Inc. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span>AISC Certified – Sophisticated Paint Endorsement</span>
                <span className="hidden h-3 w-px bg-slate-700 sm:inline" aria-hidden="true" />
                <span>"Everything we do must be accomplished with the objective of establishing Gipson Steel as the unquestioned leader in quality, service, and delivery."</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
