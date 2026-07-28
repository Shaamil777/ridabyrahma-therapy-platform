"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GlobalLoadingSequence() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("is-loading");
    document.body.classList.add("is-loading");
    document.documentElement.classList.remove("loading-complete");
    document.body.classList.remove("loading-complete");

    const t1 = setTimeout(() => setStep(1), 0);
    const t2 = setTimeout(() => setStep(2), 800);
    const t3 = setTimeout(() => setStep(3), 1600);
    const t4 = setTimeout(() => setStep(4), 2400); // fade out
    const t5 = setTimeout(() => {
      setStep(5);
      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("is-loading");
      document.documentElement.classList.add("loading-complete");
      document.body.classList.add("loading-complete");
    }, 3900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (step === 5) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#5A6B56] overflow-hidden select-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: step >= 4 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Unwind your worries
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={step >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Soak in peace
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={step >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Restore your wellbeing
        </motion.div>
      </div>
    </motion.div>
  );
}
