"use client";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className="bg-card border border-[#383838] rounded-3xl p-8 w-full xl:w-[280px] max-h-max h-fit sticky top-10 z-10 transition-all duration-300 shadow-2xl">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative w-[150px] h-[150px] bg-[#383838] rounded-[30px] overflow-hidden flex items-end justify-center shadow-lg">
             <Image 
               src="/parth-profile.jpg" 
               alt="Parth Patel" 
               fill 
               className="object-cover object-top"
               priority
             />
        </div>
        
        <div className="text-center">
            <h1 className="text-2xl font-medium tracking-wide mb-2 text-white">Parth Patel</h1>
            <span className="bg-[#2b2b2c] text-white/70 px-4 py-1 rounded-lg text-xs font-light">Web developer</span>
        </div>
      </div>

      <div className="border-t border-[#383838] my-8"></div>

      <div className="flex flex-col gap-8">
        {/* Email */}
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] flex items-center justify-center text-[#ffdb70] shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-white/50 uppercase tracking-wider">Email</span>
                <a href="mailto:Parthmk85@gmail.com" className="text-white/90 text-sm hover:text-[#ffdb70] transition-colors truncate w-32 xl:w-full" title="Parthmk85@gmail.com">Parthmk85@gmail.com</a>
            </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] flex items-center justify-center text-[#ffdb70] shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-white/50 uppercase tracking-wider">Phone</span>
                <a href="tel:+919725942209" className="text-white/90 text-sm hover:text-[#ffdb70] transition-colors">+91 972 594 2209</a>
            </div>
        </div>

        {/* Birthday */}
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] flex items-center justify-center text-[#ffdb70] shadow-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-white/50 uppercase tracking-wider">Birthday</span>
                <span className="text-white/90 text-sm">September 22, 2006</span>
            </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] flex items-center justify-center text-[#ffdb70] shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="flex flex-col">
                 <span className="text-xs text-white/50 uppercase tracking-wider">Location</span>
                 <span className="text-white/90 text-sm">Bhavnagar, Gujarat, India</span>
            </div>
        </div>
      </div>
    </aside>
  );
}
