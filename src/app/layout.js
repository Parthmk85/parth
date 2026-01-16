import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] py-8 xl:py-16 flex justify-center min-h-screen`}
      >
        <div className="w-full max-w-[1250px] px-4 grid grid-cols-1 xl:grid-cols-4 gap-6 relative">
          
           {/* Main Content Area (Left side) */}
           <div className="xl:col-span-3 bg-card border border-[#383838] rounded-3xl relative min-h-[500px] flex flex-col shadow-2xl overflow-hidden order-2 xl:order-1">
              <Navbar />
              <div className="p-6 md:p-10 pt-24 overflow-y-auto h-full scrollbar-none">
                {children}
              </div>
           </div>

           {/* Sidebar (Right side) */}
           <div className="xl:col-span-1 order-1 xl:order-2 h-fit md:sticky md:top-10">
              <Sidebar />
           </div>

        </div>
      </body>
    </html>
  );
}
