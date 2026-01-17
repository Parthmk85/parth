"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.aside 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-slate-900 border border-white/10 rounded-3xl p-6 w-full max-w-sm mx-auto shadow-2xl flex flex-col gap-6"
    >
      {/* Profile Header */}
      <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="relative w-[120px] h-[120px] bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
             <Image 
               src="/parth-profile.jpg" 
               alt="Parth Patel" 
               fill 
               className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
               priority
             />
        </div>
        
        <div>
            <h1 className="text-xl font-bold tracking-wide text-white">Parth Patel</h1>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 mt-2 inline-block rounded-lg text-xs font-medium tracking-wide shadow-lg shadow-blue-500/20">Web Developer</span>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="border-t border-white/10"></motion.div>

      {/* Contacts */}
      <div className="flex flex-col gap-6">
        {/* Email */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-blue-400 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email</span>
                <a href="mailto:Parthmk85@gmail.com" className="text-slate-300 text-xs hover:text-blue-400 transition-colors truncate" title="Parthmk85@gmail.com">Parthmk85@gmail.com</a>
            </div>
        </motion.div>

        {/* Phone */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-blue-400 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Phone</span>
                <a href="tel:+919725942209" className="text-slate-300 text-xs hover:text-blue-400 transition-colors">+91 972 594 2209</a>
            </div>
        </motion.div>

        {/* Location */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-blue-400 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Location</span>
                 <span className="text-slate-300 text-xs">Bhavnagar, Gujarat</span>
            </div>
        </motion.div>
      </div>
    </motion.aside>
  );
}
