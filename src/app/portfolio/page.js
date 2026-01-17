"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Jewelry Site",
      category: "Web development",
      img: "/jewelry-site.png",
      link: "https://parthmk85.github.io/Project-22/"
    },
    {
      title: "PC Components",
      category: "Web development",
      img: "/pc-components.png",
      link: "https://parthmk85.github.io/Project26/"
    },
    {
      title: "Online Store",
      category: "Web development",
      img: "/online-store.png",
      link: "https://parthmk85.github.io/Project21/"
    },
    {
      title: "Car Shop",
      category: "Web development",
      img: "/car-shop.png",
      link: "https://parthmk85.github.io/Project24/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.3 } }
  };

  return (
    <motion.article 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="portfolio active" data-page="portfolio"
    >
      <header className="mb-10">
        <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h2 text-3xl font-bold text-white mb-6 relative pb-4 inline-block"
        >
            Portfolio
            <motion.span 
              initial={{ width: 0 }} 
              animate={{ width: "60%" }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
            ></motion.span>
        </motion.h2>
      </header>

      <section className="projects">
        <motion.ul 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            {projects.map((project, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="project-item active group" 
                  data-category="web development"
                >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 shadow-lg relative group-hover:border-blue-500/30 transition-all duration-300">
                        
                        <div className="project-img relative h-52 w-full bg-slate-800 overflow-hidden">
                            <Image 
                                src={project.img} 
                                alt={project.title} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                            />
                            
                            {/* Overlay icon */}
                            <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]">
                                <div className="bg-slate-800 p-3 rounded-xl text-blue-400 shadow-xl border border-white/10 transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                                </div>
                            </div>
                        </div>

                        <div className="project-content p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <h3 className="project-title text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            <p className="project-category text-slate-400 text-sm font-light">View project</p>
                        </div>

                    </a>
                </motion.li>
            ))}
        </motion.ul>
      </section>
    </motion.article>
  );
}
