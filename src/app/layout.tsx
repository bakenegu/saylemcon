import type { Metadata } from "next";
import { Roboto, Allura } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});

export const metadata: Metadata = {
  title: "Turner Construction Clone",
  description: "Pixel-perfect clone of Turner Construction hero section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${allura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
