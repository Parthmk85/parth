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

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setStatusMsg('Message sent successfully!');
        setFormData({ fullname: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        // Try to explain why it failed
        setStatusMsg(data.message || `Server error: ${res.status}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
      // Show the actual error message if possible to help debugging
      setStatusMsg(error.message || 'Failed to send message.');
    }
  };

  return (
    <article className="contact active" data-page="contact">
      <header className="mb-10">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h2 text-3xl font-bold text-white mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#ffdb70] after:rounded-full"
         >
            Contact
         </motion.h2>
      </header>

      {/* Map (Optional - Not explicitly requested but common, skipping unless requested) */}
      
      <section className="contact-form">
         <h3 className="h3 text-2xl font-bold text-white mb-6">Contact Form</h3>

         <form onSubmit={handleSubmit} className="form space-y-6">
            <div className="input-wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
               <input 
                  type="text" 
                  name="fullname" 
                  value={formData.fullname}
                  onChange={handleChange}
                  className="form-input w-full bg-[#1e1e1f] border border-[#383838] px-4 py-3 rounded-xl text-white outline-none focus:border-[#ffdb70] transition-colors placeholder:text-white/40" 
                  placeholder="Full name" 
                  required 
               />
               <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full bg-[#1e1e1f] border border-[#383838] px-4 py-3 rounded-xl text-white outline-none focus:border-[#ffdb70] transition-colors placeholder:text-white/40" 
                  placeholder="Email address" 
                  required 
               />
            </div>

             <div className="input-wrapper">
               <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input w-full bg-[#1e1e1f] border border-[#383838] px-4 py-3 rounded-xl text-white outline-none focus:border-[#ffdb70] transition-colors placeholder:text-white/40" 
                  placeholder="Phone number" 
               />
            </div>

            <textarea 
               name="message" 
               value={formData.message}
               onChange={handleChange}
               className="form-input w-full bg-[#1e1e1f] border border-[#383838] px-4 py-3 rounded-xl text-white outline-none focus:border-[#ffdb70] transition-colors placeholder:text-white/40 min-h-[150px] resize-none" 
               placeholder="Your Message" 
               required
            ></textarea>


            <div className="flex justify-between items-center">
               <span className={`text-sm ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {statusMsg}
               </span>

               <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="form-btn bg-[#2b2b2c] border border-[#383838] text-[#ffdb70] px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-[#383838] transition-colors shadow-md group disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
               </button>
            </div>

         </form>
      </section>

    </article>
  );
}
