import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/app/ui/navbar';
import Footer from '@/app/ui/footer';

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

export const metadata: Metadata = {
  title: "Zachary Mooney",
  description: "A website brought to you by Zachary Mooney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16 pl-10 pb-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
