import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Lab",
  description: "lab for mvp",
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={` ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
