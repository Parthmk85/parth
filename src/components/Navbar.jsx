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
            className="fixed inset-0 z-40 bg-black/5" // Subtle overlay to indicate blocking
            onClick={() => setIsProfileOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav 
        className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4"
      >
        <div className="w-full max-w-[1250px] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl ring-1 ring-white/5 relative">
        
        {/* Profile Toggle (Left) */}
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
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                className="absolute top-full left-0 mt-4 z-[70] w-full max-w-sm"
                style={{ transformOrigin: "top left" }}
              >
                 {/* Connector Arrow */}
                 <div className="absolute -top-2 left-10 w-4 h-4 bg-slate-900 border-t border-l border-white/10 transform rotate-45 z-[71]"></div>
                 
                 <div className="relative z-[70]">
                    <Sidebar />
                 </div>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    </>
  );
}
