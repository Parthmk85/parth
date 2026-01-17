"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Navbar() {
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Global Backdrop for closing popup */}
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md transition-all duration-500" // Strong blur and fade, covers Navbar
            onClick={() => setIsProfileOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav 
        className={`fixed top-0 left-0 right-0 flex justify-center w-full px-4 pt-4 transition-all duration-300 ${isProfileOpen ? 'z-[70]' : 'z-50'}`}
      >
        <div className="w-full max-w-[1250px] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl ring-1 ring-white/5 relative">
        
        {/* Profile Toggle Wrapper */}
        <div className="relative z-50 flex items-center">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`flex items-center gap-2 group focus:outline-none transition-opacity ${isProfileOpen ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
          >
             <span className="text-xl font-bold text-white tracking-wide">
               Parth
             </span>
             <motion.span 
               animate={{ rotate: isProfileOpen ? 180 : 0 }}
               className={`transition-colors p-1 rounded-full ${isProfileOpen ? 'bg-blue-600 text-white' : 'bg-white/5 text-blue-500 group-hover:text-cyan-400'}`}
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
             </motion.span>
          </button>

          {/* Contact Info Hint (Shows when closed) */}
          <AnimatePresence>
            {!isProfileOpen && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute left-full top-1/2 -translate-y-1/2 ml-6 hidden md:flex items-center whitespace-nowrap"
              >
                 {/* Looped Arrow Pointing to Button */}
                 <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="mr-2">
                    <motion.path 
                       d="M 75 22 C 65 22 55 22 45 22 C 35 50 25 -10 35 10 C 40 20 25 22 5 22" 
                       stroke="white" 
                       strokeWidth="2" 
                       fill="none"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       initial={{ pathLength: 0, opacity: 0 }}
                       animate={{ pathLength: 1, opacity: 1 }}
                       transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 12 16 L 5 22 L 12 28" // Open V Arrow Head
                        stroke="white" 
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1 }}
                    />
                 </svg>

                 {/* Hint Box */}
                 <motion.div 
                   className="bg-slate-900 border border-white/10 px-3 py-1.5 rounded-xl shadow-xl flex flex-col"
                 >
                    <span className="text-[10px] text-slate-400 leading-none mb-0.5">My</span>
                    <span className="text-xs text-white font-semibold leading-none">Contact information</span>
                 </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Navigation Links (Right) */}
        <ul className="flex gap-1 md:gap-6 bg-slate-800/50 p-1.5 rounded-xl border border-white/5">
            {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            
            return (
                <li key={item.name}>
                  <Link
                  href={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 block ${
                      isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTopNav"
                        className="absolute inset-0 bg-blue-600/20 rounded-lg border border-blue-500/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </li>
            );
            })}
        </ul>

        {/* Profile Popup Window (Connected Dropdown) */}
        <AnimatePresence>
          {isProfileOpen && (
            <motion.div 
              initial="exit"
              animate="enter"
              exit="exit"
              className="absolute top-full left-0 z-[70]"
            >
               {/* Animated Connector for Popup: Dashed Loop */}
               <motion.svg 
                  width="250" 
                  height="120" 
                  viewBox="0 0 250 120" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-4 left-10 z-[71] pointer-events-none"
                  variants={{
                    enter: { opacity: 1, transition: { duration: 0.3 } },
                    exit: { opacity: 0, transition: { duration: 0.2 } }
                  }}
               >
                  <motion.path
                    d="M 20 10 C 20 60 80 40 100 60 C 110 70 120 60 120 90" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="5 5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <motion.path
                     d="M 114 82 L 120 92 L 126 82 Z" // Solid Triangle Pointing Down
                     fill="white"
                     initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.9, duration: 0.3 }}
                  />
               </motion.svg>

               <motion.div 
                    variants={{
                        enter: { opacity: 1, scale: 1, x: 50, y: 0 },
                        exit: { opacity: 0, scale: 0.95, x: 50, y: -10 }
                    }}
                    transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                    className="mt-6 w-full max-w-sm ml-12" 
                    style={{ transformOrigin: "top left" }}
                >
                    <div className="relative">
                        <Sidebar />
                    </div>
                </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    </>
  );
}
