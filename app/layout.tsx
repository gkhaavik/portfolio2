import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustav Haavik",
  description: "Portfolio and blog by Gustav Haavik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Analytics />

        <footer className="flex justify-center flex-col gap-2 py-8 items-center max-w-md mx-auto">
          <div className="text-center font-bold">
            Gustav Haavik © 2024
          </div>
          <div className="flex gap-4 justify-center w-full text-sm font-semibold">
            <a href="https://github.com/gustavhaavik" className="hover:underline">Github</a>
            <a href="https://linkedin.com/gustavhaavik" className="hover:underline">Linkedin</a>
            <a href="emailto:gustavhaavik@gmail.com" className="hover:underline">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
