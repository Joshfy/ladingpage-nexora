import type { Metadata } from "next";
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
  title: "Nexora Group — Holding tecnológico de proyectos digitales",
  description: "Nexora Group es un holding tecnológico que crea, desarrolla y respalda proyectos digitales orientados a resolver necesidades reales mediante tecnología, diseño e innovación.",
  openGraph: {
    title: "Nexora Group — Holding tecnológico",
    description: "Diseñamos la infraestructura digital del mañana.",
    url: "https://nexoragroup.com",
    siteName: "Nexora Group",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="scroll-smooth"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-brand-blue selection:text-white bg-white text-brand-navy`}
      >
        {children}
      </body>
    </html>
  );
}
