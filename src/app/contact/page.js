"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await res.json();
      } else {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        throw new Error(`Server responded with ${res.status}: ${res.statusText}`);
      }

      if (res.ok) {
        setStatus('success');
        setStatusMsg('Message sent successfully!');
        setFormData({ fullname: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg(data.message || `Server error: ${res.status}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
      setStatusMsg(error.message || 'Failed to send message (Network/Unknown error).');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.article 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="contact active" data-page="contact"
    >
      <header className="mb-10">
         <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h2 text-3xl font-bold text-white mb-6 relative pb-4 inline-block"
         >
            Contact
            <motion.span 
              initial={{ width: 0 }} 
              animate={{ width: "40%" }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
            ></motion.span>
         </motion.h2>
      </header>
      
      <motion.section variants={itemVariants} className="contact-form">
         <h3 className="h3 text-2xl font-bold text-white mb-6">Contact Form</h3>

         <form onSubmit={handleSubmit} className="form space-y-6">
            <div className="input-wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
               <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                   <input 
                      type="text" 
                      name="fullname" 
                      value={formData.fullname}
                      onChange={handleChange}
                      className="form-input w-full bg-slate-900/50 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-blue-500/50 focus:bg-slate-900 focus:shadow-lg focus:shadow-blue-500/10 transition-all placeholder:text-slate-500" 
                      placeholder="Full name" 
                      required 
                   />
               </motion.div>
               <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                   <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input w-full bg-slate-900/50 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-blue-500/50 focus:bg-slate-900 focus:shadow-lg focus:shadow-blue-500/10 transition-all placeholder:text-slate-500" 
                      placeholder="Email address" 
                      required 
                   />
               </motion.div>
            </div>

             <motion.div whileFocus={{ scale: 1.02 }} className="input-wrapper relative group">
               <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input w-full bg-slate-900/50 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-blue-500/50 focus:bg-slate-900 focus:shadow-lg focus:shadow-blue-500/10 transition-all placeholder:text-slate-500" 
                  placeholder="Phone number" 
               />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                <textarea 
                   name="message" 
                   value={formData.message}
                   onChange={handleChange}
                   className="form-input w-full bg-slate-900/50 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-blue-500/50 focus:bg-slate-900 focus:shadow-lg focus:shadow-blue-500/10 transition-all placeholder:text-slate-500 min-h-[150px] resize-none" 
                   placeholder="Your Message" 
                   required
                ></textarea>
            </motion.div>


            <div className="flex justify-between items-center">
               <span className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {statusMsg}
               </span>

               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  disabled={status === 'loading'}
                  className="form-btn bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all w-fit ml-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale"
               >
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
               </motion.button>
            </div>

         </form>
      </motion.section>

    </motion.article>
  );
}
