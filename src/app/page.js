"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <article className="about active" data-page="about">
        <header className="mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h2 text-3xl font-bold text-white mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#ffdb70] after:rounded-full"
          >
            About Me
          </motion.h2>
        </header>


        <section className="text-white/80 leading-7 text-[15px] space-y-4 mb-10">
          <p>
            I'm Creative Director and UI/UX Designer from Gujarat, India, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </section>

        <section className="service">
          <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Service Item 1: Web Design */}
            <li className="service-item bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] p-6 rounded-2xl border border-[#383838] shadow-sm flex gap-4 transition-transform hover:-translate-y-1">
              <div className="service-icon-box text-[#ffdb70]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <div className="service-content-box">
                <h4 className="h4 text-lg font-medium text-white mb-2">Web Design</h4>
                <p className="text-white/60 text-sm leading-6">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>
            </li>

            {/* Service Item 2: Web Development */}
            <li className="service-item bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] p-6 rounded-2xl border border-[#383838] shadow-sm flex gap-4 transition-transform hover:-translate-y-1">
              <div className="service-icon-box text-[#ffdb70]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div className="service-content-box">
                <h4 className="h4 text-lg font-medium text-white mb-2">Web Development</h4>
                <p className="text-white/60 text-sm leading-6">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>

            {/* Service Item 3: Mobile Apps */}
            <li className="service-item bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] p-6 rounded-2xl border border-[#383838] shadow-sm flex gap-4 transition-transform hover:-translate-y-1">
              <div className="service-icon-box text-[#ffdb70]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
              </div>
              <div className="service-content-box">
                <h4 className="h4 text-lg font-medium text-white mb-2">Mobile Apps</h4>
                <p className="text-white/60 text-sm leading-6">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </li>

            {/* Service Item 4: Photography */}
            <li className="service-item bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] p-6 rounded-2xl border border-[#383838] shadow-sm flex gap-4 transition-transform hover:-translate-y-1">
              <div className="service-icon-box text-[#ffdb70]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
              </div>
              <div className="service-content-box">
                <h4 className="h4 text-lg font-medium text-white mb-2">Photography</h4>
                <p className="text-white/60 text-sm leading-6">
                  I make high-quality photos of any category at a professional level.
                </p>
              </div>
            </li>

          </ul>
        </section>
      </article>
  );
}
