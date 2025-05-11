import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/app/comp-structure/Navbar";
import Footer from "@/src/app/comp-structure/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChaiYeah - Buy me a Chai",
  description: "This Website is for Chai Lovers, a platform for crowdfunding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="min-h-screen bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
