import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Parth Patel - Web Developer",
  description: "Portfolio of Parth Patel, a Web Developer and UI/UX Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200 min-h-screen bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-900 to-slate-950`}
      >
        {/* Top Navbar */}
        <Navbar />

        {/* Main Layout Grid */}
        <div className="w-full max-w-[1250px] mx-auto px-4 py-8 xl:py-12 mt-20 relative">
          
           {/* Main Content Area */}
           <main className="relative z-10 min-h-[500px] flex flex-col pb-10">
              <div className="fade-in-content">
                {children}
              </div>
           </main>

        </div>
      </body>
    </html>
  );
}
