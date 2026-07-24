"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoadingSequence() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("is-loading");
    document.body.classList.add("is-loading");
    document.documentElement.classList.remove("loading-complete");
    document.body.classList.remove("loading-complete");

    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 1100);
    const t3 = setTimeout(() => setStep(3), 1900);
    const t4 = setTimeout(() => setStep(4), 2600); // fade out
    const t5 = setTimeout(() => {
      setStep(5);
      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("is-loading");
      document.documentElement.classList.add("loading-complete");
      document.body.classList.add("loading-complete");
    }, 3200);

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
      className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#5A6B56] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: step >= 4 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div layout className="flex flex-col items-center text-center gap-4 md:gap-6">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key="step1"
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Unwind your worries
            </motion.div>
          )}
          
          {step >= 2 && (
            <motion.div
              key="step2"
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Soak in peace
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              key="step3"
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Restore your wellbeing
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
