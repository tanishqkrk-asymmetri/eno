import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LS from "@/components/LocomotiveScroll";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eNO - your mini AI bodyguard",
  description:
    "the world’s first mini AI bodyguard that uses real-time AI intelligence to autonomously detect and respond to real-world threats without relying on human reaction during danger",
  openGraph: {
    title: "eNO - your mini AI bodyguard",
    description:
      "the world’s first mini AI bodyguard that uses real-time AI intelligence to autonomously detect and respond to real-world threats without relying on human reaction during danger",
    images: [
      {
        url: "/endframe.webp",
        width: 1200,
        height: 630,
        alt: "eNO Badge",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="clarity-script" strategy="afterInteractive">
        {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uf3q8u766o");
          `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* <LS></LS> */}
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
