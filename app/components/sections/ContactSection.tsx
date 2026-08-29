"use client";

import { motion } from "framer-motion";
import Icon from "@/app/components/ui/Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full relative overflow-hidden" style={{ background: "var(--background)", paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-[1px]" style={{ background: "var(--border-subtle)" }} />
               <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
                 Reach Out
               </span>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6" 
              style={{ fontFamily: "var(--font-cormorant-garamond)", color: "var(--primary)", letterSpacing: "-0.01em" }}
            >
              Talk to someone who understands
            </h2>

            {/* Trust Line */}
            <div className="flex items-center gap-3 mb-10 w-fit px-5 py-3 border shadow-sm" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)', borderRadius: 'var(--card-radius)' }}>
              <span className="text-[var(--accent)]">
                <Icon name="shield" className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide" style={{ color: "var(--primary)" }}>
                100% confidential <span className="opacity-40 mx-1">|</span> Certified counselors
              </span>
            </div>

            {/* Contact & Availability Grid */}
            <div className="grid sm:grid-cols-2 gap-10 border-b pb-12 mb-10" style={{ borderColor: 'var(--border-subtle)' }}>
               {/* Contact Options */}
               <div>
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] mb-5 text-black/40">Contact Options</h4>
                  <div className="space-y-4 flex flex-col">
                    <a href="tel:+918714808571" className="flex items-center gap-3 group cursor-pointer w-fit">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--accent)] group-hover:text-white" style={{ backgroundColor: "var(--secondary-bg)", color: "var(--primary)" }}>
                        <Icon name="phone" className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-medium transition-colors" style={{ color: "var(--primary)" }}>+91 8714808571</span>
                    </a>
                    <a href="https://wa.me/918714808571?text=I%20would%20like%20to%20book%20a%20session" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer w-fit">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#25D366] group-hover:text-white" style={{ backgroundColor: "var(--secondary-bg)", color: "var(--primary)" }}>
                        <Icon name="whatsapp" className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium transition-colors" style={{ color: "var(--primary)" }}>WhatsApp Us</span>
                    </a>
                    <a href="mailto:ridabyrahma@gmail.com" className="flex items-center gap-3 group cursor-pointer w-fit">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--accent)] group-hover:text-white" style={{ backgroundColor: "var(--secondary-bg)", color: "var(--primary)" }}>
                        <Icon name="email" className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium transition-colors" style={{ color: "var(--primary)" }}>ridabyrahma@gmail.com</span>
                    </a>
                  </div>
               </div>

               {/* Availability */}
               <div>
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] mb-5 text-black/40">Availability</h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                      <div className="mt-0.5 text-[var(--accent)]">
                        <Icon name="clock" />
                      </div>
                      <div>
                        <p className="text-sm font-bold mb-1" style={{ color: "var(--primary)" }}>Regular Sessions</p>
                        <p className="text-[13px]" style={{ color: "var(--text-muted-color)" }}>Mon - Fri: 9:00 AM - 8:00 PM</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-0.5 text-[var(--accent)]">
                        <Icon name="moon" />
                      </div>
                      <div>
                        <p className="text-sm font-bold mb-1" style={{ color: "var(--primary)" }}>Weekend Support</p>
                        <p className="text-[13px]" style={{ color: "var(--text-muted-color)" }}>Sat: 10:00 AM - 4:00 PM</p>
                      </div>
                    </li>
                  </ul>
               </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-0">
               <a href="#booking" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 btn-primary shadow-lg hover:shadow-xl group">
                 Book a Session
                 <Icon name="arrow-right" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
               </a>
               <a href="#talk" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 border bg-transparent hover:bg-black/5" style={{ borderColor: "var(--border-subtle)", color: "var(--primary)" }}>
                 Talk Now
               </a>
            </div>



          </motion.div>

          {/* Right Column: Quick Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="bg-white p-8 md:p-10 border border-[var(--border-subtle)] relative overflow-hidden" style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow)' }}>
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--accent)] opacity-5 blur-3xl pointer-events-none" />
               <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[var(--calm-accent)] opacity-5 blur-3xl pointer-events-none" />

               <div className="relative z-10">
                 <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-cormorant-garamond)", color: "var(--primary)" }}>
                   Drop us a message
                 </h3>
                 <p className="text-[13px] sm:text-sm mb-8" style={{ color: "var(--text-muted-color)" }}>
                   Fill out the quick form below and we&apos;ll get back to you shortly.
                 </p>

                 <form action="https://formsubmit.co/ridabyrahma@gmail.com" method="POST" className="space-y-5">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     <div className="space-y-1.5">
                       <label htmlFor="contact-name" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] pl-1" style={{ color: "var(--primary)" }}>Full Name</label>
                       <input 
                         id="contact-name"
                         name="name"
                         type="text" 
                         required
                         className="w-full bg-[var(--background)] border border-[var(--border-subtle)] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-black/20" 
                         placeholder="Jane Doe" 
                       />
                     </div>
                     <div className="space-y-1.5">
                       <label htmlFor="contact-email" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] pl-1" style={{ color: "var(--primary)" }}>Email Address</label>
                       <input 
                         id="contact-email"
                         name="email"
                         type="email" 
                         required
                         className="w-full bg-[var(--background)] border border-[var(--border-subtle)] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-black/20" 
                         placeholder="jane@example.com" 
                       />
                     </div>
                   </div>
                   
                   <div className="space-y-1.5">
                     <label htmlFor="contact-phone" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] pl-1" style={{ color: "var(--primary)" }}>Phone Number (Optional)</label>
                     <input 
                       id="contact-phone"
                       name="phone"
                       type="tel" 
                       className="w-full bg-[var(--background)] border border-[var(--border-subtle)] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-black/20" 
                       placeholder="+91 00000 00000" 
                     />
                   </div>

                   <div className="space-y-1.5">
                     <label htmlFor="contact-message" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] pl-1" style={{ color: "var(--primary)" }}>How can we help?</label>
                     <textarea 
                       id="contact-message"
                       name="message"
                       required
                       rows={4} 
                       className="w-full bg-[var(--background)] border border-[var(--border-subtle)] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none placeholder:text-black/20" 
                       placeholder="Briefly describe what's on your mind..."
                     ></textarea>
                   </div>

                   <button 
                     type="submit" 
                     className="w-full mt-2 bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] font-bold tracking-[0.15em] uppercase text-[10px] sm:text-[11px] py-4 rounded-xl transition-colors shadow-lg shadow-black/10 flex justify-center items-center gap-2"
                   >
                     Send Message
                   </button>
                 </form>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}