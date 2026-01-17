"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
  };

  return (
    <motion.article 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="about active" data-page="about"
    >
        <header className="mb-10">
          <motion.h2 
            variants={itemVariants}
            className="h2 text-3xl font-bold text-white mb-6 relative pb-4 inline-block"
          >
            About Me
            <motion.span 
              initial={{ width: 0 }} 
              animate={{ width: "40%" }} 
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
            ></motion.span>
          </motion.h2>
        </header>


        <motion.section variants={itemVariants} className="text-slate-300 leading-7 text-[16px] space-y-4 mb-10 font-light tracking-wide">
          <p>
            I'm Creative Director and UI/UX Designer from Gujarat, India, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </motion.section>

        <section className="service">
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-6">What I'm Doing</motion.h3>

          <motion.ul 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            {/* Service Item 1: Web Design */}
            <motion.li 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="service-item bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm flex gap-4 group hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="service-icon-box text-blue-400 group-hover:text-cyan-400 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <div className="service-content-box">
                <h4 className="h4 text-lg font-medium text-white mb-2 group-hover:text-blue-200 transition-colors">Web Design</h4>
                <p className="text-slate-400 text-sm leading-6">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>
            </motion.li>

            {/* Service Item 2: Web Development */}
            <motion.li 
               variants={itemVariants}
               whileHover={{ y: -5, scale: 1.02 }}
               className="service-item bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm flex gap-4 group hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="service-icon-box text-blue-400 group-hover:text-cyan-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div className="service-content-box">
                <h4 className="h4 text-lg font-medium text-white mb-2 group-hover:text-blue-200 transition-colors">Web Development</h4>
                <p className="text-slate-400 text-sm leading-6">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </motion.li>

            {/* Service Item 3: Mobile Apps */}
            <motion.li 
               variants={itemVariants}
               whileHover={{ y: -5, scale: 1.02 }}
               className="service-item bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm flex gap-4 group hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="service-icon-box text-blue-400 group-hover:text-cyan-400 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
              </div>
              <div className="service-content-box">
                <h4 className="h4 text-lg font-medium text-white mb-2 group-hover:text-blue-200 transition-colors">Mobile Apps</h4>
                <p className="text-slate-400 text-sm leading-6">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </motion.li>

            {/* Service Item 4: Photography */}
            <motion.li 
               variants={itemVariants}
               whileHover={{ y: -5, scale: 1.02 }}
               className="service-item bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm flex gap-4 group hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="service-icon-box text-blue-400 group-hover:text-cyan-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
              </div>
              <div className="service-content-box">
                <h4 className="h4 text-lg font-medium text-white mb-2 group-hover:text-blue-200 transition-colors">Photography</h4>
                <p className="text-slate-400 text-sm leading-6">
                  I make high-quality photos of any category at a professional level.
                </p>
              </div>
            </motion.li>

          </motion.ul>
        </section>
      </motion.article>
  );
}
