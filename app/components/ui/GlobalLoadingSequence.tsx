"use client";

import { useState, useEffect } from "react";

type LoadingState = 'hidden' | 'fade-in' | 'transition' | 'complete';

export default function GlobalLoadingSequence() {
  const [loadingState, setLoadingState] = useState<LoadingState>('hidden');

  useEffect(() => {
    document.documentElement.classList.add("is-loading");
    document.body.classList.add("is-loading");
    document.documentElement.classList.remove("loading-complete");
    document.body.classList.remove("loading-complete");

    const t1 = setTimeout(() => setLoadingState('fade-in'), 100);
    const t2 = setTimeout(() => setLoadingState('transition'), 2000);
    const t3 = setTimeout(() => {
      setLoadingState('complete');
      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("is-loading");
      document.documentElement.classList.add("loading-complete");
      document.body.classList.add("loading-complete");
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
      {loadingState !== 'complete' && (
        <div 
          className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            loadingState === 'transition' ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />
      )}

      <div 
        className={`flex items-center justify-center overflow-hidden pointer-events-none transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${
          loadingState === 'complete' ? 'absolute top-0 left-0 w-full h-[100vh] z-[30]' : 'fixed inset-0 z-[60]'
        }`}
        style={{
          transitionDuration: loadingState === 'fade-in' ? '800ms' : loadingState === 'transition' ? '1200ms' : '0ms',
          opacity: loadingState === 'hidden' ? 0 : loadingState === 'fade-in' ? 1 : 0.85,
          transform: loadingState === 'hidden' || loadingState === 'fade-in' 
            ? 'scale(0.2) rotate(-15deg)'
            : 'scale(1) rotate(8deg)',
        }}
      >
        <img
          src="/images/leaf.png"
          alt="Autumn Leaf"
          className={`w-[20rem] h-[20rem] sm:w-[26rem] sm:h-[26rem] md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] object-contain select-none filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)] ${
            loadingState === 'fade-in' ? 'animate-pulse' : ''
          }`}
        />
      </div>
    </>
  );
}
