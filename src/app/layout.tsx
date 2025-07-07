import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Bariq Firjatullah - Full-Stack Developer & DevOps Engineer",
  description:
    "Portfolio Bariq Firjatullah, seorang Software Engineer dengan keahlian Full-Stack Development dan DevOps. Berpengalaman dalam membangun aplikasi web modern dan mengelola infrastruktur server.",
  openGraph: {
    title: "Bariq Firjatullah - Full-Stack & DevOps",
    description:
      "Jelajahi proyek, pengalaman, dan keahlian teknis dari Bariq Firjatullah.",
    url: "https://www.website-anda.com", // <-- GANTI DENGAN URL WEBSITE ANDA
    images: [
      {
        url: "/og-image.png", // <-- Pastikan Anda punya gambar ini di folder /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bariq Firjatullah",
    url: "https://bariqfirjatullah.my.id", // <-- GANTI DENGAN URL WEBSITE ANDA
    jobTitle: "Software Engineer (Full-Stack & DevOps)",
    email: "bariqfirjatullah1803@gmail.com", // <-- GANTI DENGAN EMAIL ANDA
    sameAs: [
      "https://www.linkedin.com/in/bariq-firjatullah",
      "https://github.com/bariqfirjatullah1803",
    ],
  };
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable}`}>
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
