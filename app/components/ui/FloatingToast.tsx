"use client";

import { useState } from "react";
import Icon from "./Icons";

export default function FloatingToast() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  return (
    <div className="fixed z-50 bottom-6 md:bottom-10 right-4 md:right-10 pointer-events-none flex flex-col items-end gap-3">
      {isTooltipVisible && (
        <div className="bg-white border border-[var(--border-subtle)] p-4 rounded-2xl shadow-[var(--card-shadow)] relative pointer-events-auto origin-bottom-right transition-all duration-500 max-w-[260px] animate-in fade-in slide-in-from-bottom-4">
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-3 right-3 text-[var(--text-muted-color)] hover:text-[var(--primary)] transition-colors"
            aria-label="Close notification"
          >
            <Icon name="close" className="w-3.5 h-3.5" />
          </button>
          
          <div className="pr-4">
            <h4 className="text-[13px] font-bold text-[var(--primary)] mb-1 uppercase tracking-wide">
              Need Help?
            </h4>
            <p className="text-[12.5px] leading-relaxed text-[var(--text-secondary)]">
              We are here to support you. Chat with our team to get started.
            </p>
          </div>
        </div>
      )}

      <a
        href="https://wa.me/1234567890?text=Hi%2C%20I%27d%20like%20to%20book%20a%20therapy%20session.%20Can%20you%20help%20me%20get%20started%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center bg-[var(--primary)] hover:bg-[#25D366] text-white h-14 rounded-full shadow-[var(--card-shadow-hover)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden w-14 hover:w-[180px]"
      >
        <div className="w-14 h-14 shrink-0 flex items-center justify-center">
          <Icon name="whatsapp" className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="whitespace-nowrap font-bold text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-6">
          Chat With Us
        </span>
      </a>
    </div>
  );
}
