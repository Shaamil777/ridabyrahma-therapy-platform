"use client";

import Icon from "./Icons";

export default function FloatingToast() {
  return (
    <div className="fixed z-50 bottom-6 md:bottom-10 right-4 md:right-10 pointer-events-none flex flex-col items-end">
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

