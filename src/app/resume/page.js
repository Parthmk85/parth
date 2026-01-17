"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.article 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="resume active" data-page="resume"
    >
      <header className="mb-10">
        <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h2 text-3xl font-bold text-white mb-6 relative pb-4 inline-block"
        >
            Resume
            <motion.span 
              initial={{ width: 0 }} 
              animate={{ width: "40%" }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
            ></motion.span>
        </motion.h2>
      </header>

      {/* Education Section */}
      <motion.section variants={itemVariants} className="timeline mb-12">
        <div className="flex items-center gap-4 mb-6 group">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-blue-400 shadow-lg group-hover:text-cyan-400 transition-colors duration-300">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <h3 className="h3 text-2xl font-bold text-white">Education</h3>
        </div>

        <div className="timeline-list ml-6 border-l border-white/10 pl-8 space-y-8 relative">
           
           {/* Item 1 */}
           <motion.div 
             variants={itemVariants}
             className="timeline-item relative"
           >
              <div className="absolute -left-[43px] top-1 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_0_4px_rgba(15,23,42,1)] ring-2 ring-blue-500/50"></div>
              <h4 className="h4 text-lg font-bold text-white mb-1">Gyanmanjari Institute Of Technology ( Diploma )</h4>
              <span className="text-blue-400 text-sm block mb-2 font-medium">2022 — 2025</span>
              <p className="text-slate-400 text-sm leading-6">
                Completing graduation is a significant milestone in one's educational journey, marking the successful attainment of a bachelor's degree.
              </p>
           </motion.div>

           {/* Item 2 */}
           <motion.div 
             variants={itemVariants}
             className="timeline-item relative"
           >
              <div className="absolute -left-[43px] top-1 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_0_4px_rgba(15,23,42,1)] ring-2 ring-blue-500/50"></div>
              <h4 className="h4 text-lg font-bold text-white mb-1">BAPU-GKV ( B.Tech )</h4>
              <span className="text-blue-400 text-sm block mb-2 font-medium">2025 — Running</span>
           </motion.div>
           
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section variants={itemVariants} className="skill">
        <h3 className="h3 text-2xl font-bold text-white mb-6">Skills</h3>

        <ul className="skills-list content-card bg-slate-900/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl space-y-6">
           
           {/* Skill 1 */}
           <li className="skill-item group">
              <div className="title-wrapper flex justify-between items-center mb-2">
                 <h5 className="h5 text-white font-medium group-hover:text-blue-300 transition-colors">Web Design</h5>
                 <data className="text-slate-400 text-sm" value="80">80%</data>
              </div>
              <div className="skill-progress-bg bg-slate-800 rounded-full h-2 w-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "80%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.2 }}
                   className="skill-progress-fill bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full relative"
                 >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 blur-[2px]"></div>
                 </motion.div>
              </div>
           </li>

           {/* Skill 2 */}
           <li className="skill-item group">
              <div className="title-wrapper flex justify-between items-center mb-2">
                 <h5 className="h5 text-white font-medium group-hover:text-blue-300 transition-colors">Graphic Design</h5>
                 <data className="text-slate-400 text-sm" value="70">70%</data>
              </div>
              <div className="skill-progress-bg bg-slate-800 rounded-full h-2 w-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "70%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.3 }}
                   className="skill-progress-fill bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full relative"
                 >
                     <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 blur-[2px]"></div>
                 </motion.div>
              </div>
           </li>

           {/* Skill 3 */}
           <li className="skill-item group">
              <div className="title-wrapper flex justify-between items-center mb-2">
                 <h5 className="h5 text-white font-medium group-hover:text-blue-300 transition-colors">Branding</h5>
                 <data className="text-slate-400 text-sm" value="90">90%</data>
              </div>
              <div className="skill-progress-bg bg-slate-800 rounded-full h-2 w-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "90%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.4 }}
                   className="skill-progress-fill bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full relative"
                 >
                     <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 blur-[2px]"></div>
                 </motion.div>
              </div>
           </li>

           {/* Skill 4 */}
           <li className="skill-item group">
              <div className="title-wrapper flex justify-between items-center mb-2">
                 <h5 className="h5 text-white font-medium group-hover:text-blue-300 transition-colors">WordPress</h5>
                 <data className="text-slate-400 text-sm" value="100">100%</data>
              </div>
              <div className="skill-progress-bg bg-slate-800 rounded-full h-2 w-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.5 }}
                   className="skill-progress-fill bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full relative"
                 >
                     <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 blur-[2px]"></div>
                 </motion.div>
              </div>
           </li>

        </ul>
      </motion.section>

    </motion.article>
  );
}
