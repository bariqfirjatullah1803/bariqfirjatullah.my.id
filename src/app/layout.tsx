import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://bariqfirjatullah.my.id"),
  title: "Bariq Firjatullah | Full-Stack Developer & DevOps Engineer",
  description:
    "Portofolio Bariq Firjatullah, seorang Web Developer dan Instruktur dengan pengalaman lebih dari 3 tahun dalam Full-Stack Development (TypeScript, Node.js, PHP/Laravel, React) dan manajemen infrastruktur (Docker, Nginx, CI/CD). Siap untuk proyek menantang berikutnya.",
  openGraph: {
    title: "Portofolio Bariq Firjatullah - Full-Stack & DevOps Specialist",
    description:
      "Jelajahi proyek, pengalaman, dan keahlian teknis Bariq Firjatullah dalam pengembangan web modern dan otomatisasi infrastruktur.",
    url: "https://bariqfirjatullah.my.id", // PASTIKAN URL INI BENAR
    images: [
      {
        url: "/og-image.png", // PASTIKAN FILE GAMBAR INI ADA DI FOLDER /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bariq Firjatullah | Full-Stack Developer & DevOps Engineer",
    description:
      "Web Developer dengan keahlian di TypeScript, Node.js, Laravel, React, Docker, dan CI/CD.",
    images: ["/og-image.png"], // PASTIKAN GAMBAR INI ADA
  },
  keywords:
    "Full-Stack Developer, DevOps Engineer, Web Developer, TypeScript, Node.js, PHP, Laravel, React, Docker, Nginx, CI/CD, Instruktur Web, PortfolioClient, Bariq Firjatullah, Malang",
  creator: "Bariq Firjatullah",
  publisher: "Bariq Firjatullah",
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
    url: "https://bariqfirjatullah.my.id", // PASTIKAN URL INI BENAR
    jobTitle: "Web Developer & DevOps Engineer",
    email: "bariqfirjatullah1803@gmail.com",
    telephone: "+6285173001803",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "SMKN 4 Malang",
    },
    knowsAbout: [
      "Full-Stack Development",
      "DevOps",
      "TypeScript",
      "Node.js",
      "PHP",
      "Laravel",
      "React.js",
      "Docker",
      "Nginx",
      "CI/CD",
      "SEO",
    ],
    sameAs: [
      "https://www.linkedin.com/in/bariq-firjatullah",
      "https://github.com/bariqfirjatullah1803",
    ],
  };
  return (
    <ClerkProvider>
      <html lang="id" className={`${geist.variable}`}>
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
