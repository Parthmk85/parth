"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine current page title
  const currentPage = navItems.find(item => 
      item.path === pathname || (item.path !== '/' && pathname.startsWith(item.path))
  )?.name || 'About';

  return (
    <nav className="absolute top-0 right-0 left-0 p-8 z-20 flex justify-between items-start md:items-center w-full pointer-events-none">
       {/* Use pointer-events-none for the full width container so it doesn't block clicks below, 
           but re-enable for the actual navbar content */}
      
      <div className="hidden md:block text-3xl font-bold text-white pl-2 drop-shadow-md">
      </div>

       <div className="pointer-events-auto bg-[#2b2b2c]/80 backdrop-blur-md border border-[#383838] px-8 py-4 rounded-tl-[0px] rounded-bl-[20px] rounded-tr-[0px] rounded-br-[0px] md:rounded-bl-[20px] md:rounded-tr-[20px] absolute top-0 right-0 rounded-b-3xl md:rounded-t-none md:rounded-r-none w-fit flex gap-6 md:gap-8 items-center justify-center md:justify-end shadow-lg overflow-hidden">
        
        
        {/* Mobile Title (Static) */}
        <span className="text-xl font-bold text-white mr-4 block md:hidden">{currentPage}</span>

        <div className="flex gap-4 md:gap-6 text-sm md:text-base font-medium">
            {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            
            return (
                <Link
                key={item.name}
                href={item.path}
                className={`transition-colors duration-300 ${
                    isActive ? 'text-[#ffdb70]' : 'text-white/60 hover:text-white/80'
                }`}
                >
                {item.name}
                </Link>
            );
            })}
        </div>
      </div>
    </nav>
  );
}
