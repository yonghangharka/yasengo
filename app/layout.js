import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aside from "./components/Aside";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harka Hang Limbu",
  description: "this is just title description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col md:flex-row min-h-screen`}
      >
        <Aside />
        <main className="flex-1 overflow-y-auto min-h-screen p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
