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

  return (
    <article className="portfolio active" data-page="portfolio">
      <header className="mb-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h2 text-3xl font-bold text-white mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#ffdb70] after:rounded-full"
        >
            Portfolio
        </motion.h2>
      </header>

      <section className="projects">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <li key={index} className="project-item active group" data-category="web development">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] rounded-2xl overflow-hidden border border-[#383838] shadow-md transition-transform hover:-translate-y-1 relative">
                        
                        <div className="project-img relative h-48 w-full bg-[#383838] overflow-hidden">
                            <Image 
                                src={project.img} 
                                alt={project.title} 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Overlay icon */}
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <div className="bg-[#2b2b2c] p-3 rounded-xl text-[#ffdb70]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                                </div>
                            </div>
                        </div>

                        <div className="project-content p-6">
                            <h3 className="project-title text-lg font-medium text-white mb-1 group-hover:text-[#ffdb70] transition-colors">{project.title}</h3>
                            <p className="project-category text-white/50 text-sm">View project</p>
                        </div>

                    </a>
                </li>
            ))}
        </ul>
      </section>
    </article>
  );
}
