"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header className="mb-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h2 text-3xl font-bold text-white mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#ffdb70] after:rounded-full"
        >
            Resume
        </motion.h2>
      </header>

      {/* Education Section */}
      <section className="timeline mb-12">
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-[#ffdb70] shadow-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <h3 className="h3 text-2xl font-bold text-white">Education</h3>
        </div>

        <div className="timeline-list ml-6 border-l border-[#383838] pl-8 space-y-8 relative">
           
           {/* Item 1 */}
           <div className="timeline-item relative before:content-[''] before:absolute before:-left-[41px] before:top-1 before:w-4 before:h-4 before:bg-[#ffdb70] before:rounded-full before:shadow-[0_0_0_4px_#2b2b2c]">
              <h4 className="h4 text-lg font-medium text-white mb-1">Gyanmanjari Institute Of Technology</h4>
              <span className="text-[#ffdb70] text-sm block mb-2">2022 — 2025</span>
              <p className="text-white/60 text-sm leading-6">
                Completing graduation is a significant milestone in one's educational journey, marking the successful attainment of a bachelor's degree.
              </p>
           </div>

           {/* Item 2 */}
           <div className="timeline-item relative before:content-[''] before:absolute before:-left-[41px] before:top-1 before:w-4 before:h-4 before:bg-[#ffdb70] before:rounded-full before:shadow-[0_0_0_4px_#2b2b2c]">
              <h4 className="h4 text-lg font-medium text-white mb-1">BAPU-GKV</h4>
              <span className="text-[#ffdb70] text-sm block mb-2">2025 — Running</span>
           </div>
           
        </div>
      </section>

      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 text-2xl font-bold text-white mb-6">Skills</h3>

        <ul className="skills-list content-card bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] p-8 rounded-3xl border border-[#383838] shadow-sm space-y-6">
           
           {/* Skill 1 */}
           <li className="skill-item">
              <div className="title-wrapper flex justify-between items-center mb-2">
                 <h5 className="h5 text-white font-medium">Web Design</h5>
                 <data className="text-white/60 text-sm" value="80">80%</data>
              </div>
              <div className="skill-progress-bg bg-[#383838] rounded-full h-2 w-full">
                 <div className="skill-progress-fill bg-[#ffdb70] h-full rounded-full w-[80%]"></div>
              </div>
           </li>

           {/* Skill 2 */}
           <li className="skill-item">
              <div className="title-wrapper flex justify-between items-center mb-2">
                 <h5 className="h5 text-white font-medium">Graphic Design</h5>
                 <data className="text-white/60 text-sm" value="70">70%</data>
              </div>
              <div className="skill-progress-bg bg-[#383838] rounded-full h-2 w-full">
                 <div className="skill-progress-fill bg-[#ffdb70] h-full rounded-full w-[70%]"></div>
              </div>
           </li>

           {/* Skill 3 */}
           <li className="skill-item">
              <div className="title-wrapper flex justify-between items-center mb-2">
                 <h5 className="h5 text-white font-medium">Branding</h5>
                 <data className="text-white/60 text-sm" value="90">90%</data>
              </div>
              <div className="skill-progress-bg bg-[#383838] rounded-full h-2 w-full">
                 <div className="skill-progress-fill bg-[#ffdb70] h-full rounded-full w-[90%]"></div>
              </div>
           </li>

           {/* Skill 4 */}
           <li className="skill-item">
              <div className="title-wrapper flex justify-between items-center mb-2">
                 <h5 className="h5 text-white font-medium">WordPress</h5>
                 <data className="text-white/60 text-sm" value="100">100%</data>
              </div>
              <div className="skill-progress-bg bg-[#383838] rounded-full h-2 w-full">
                 <div className="skill-progress-fill bg-[#ffdb70] h-full rounded-full w-[100%]"></div>
              </div>
           </li>

        </ul>
      </section>

    </article>
  );
}
