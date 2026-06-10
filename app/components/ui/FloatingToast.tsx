"use client";

import { useState } from "react";
import Icon from "./Icons";

/**
 * Self-contained dismissible floating toast with WhatsApp CTA.
 * Extracted from Navbar to separate concerns.
 */
export default function FloatingToast() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
        isVisible
          ? "bottom-6 md:bottom-10 right-4 md:right-10 translate-y-0 opacity-100"
          : "bottom-4 md:bottom-8 right-4 md:right-10 translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="bg-white border border-[var(--border-subtle)] p-4 md:p-5 pointer-events-auto overflow-hidden relative max-w-[340px]"
        style={{
          borderRadius: "var(--card-radius)",
          boxShadow: "var(--card-shadow)",
        }}
      >
        {/* Subtle Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent)]" />

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
          aria-label="Close notification"
        >
          <Icon name="close" className="w-3.5 h-3.5" />
        </button>

        <div className="flex gap-4 items-start pr-4">
          <div className="bg-[var(--accent)]/10 text-[var(--accent)] w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1">
            <Icon name="star" />
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="text-[13px] font-bold text-[var(--primary)] uppercase tracking-wide">
              Need Help?
            </h4>
            <p className="text-[12px] md:text-[13px] leading-relaxed font-medium text-[var(--text-secondary)]">
              Struggling with stress, anxiety, or feeling overwhelmed? You
              don&apos;t have to face it alone — book a session today.
            </p>

            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I%27d%20like%20to%20book%20a%20therapy%20session.%20Can%20you%20help%20me%20get%20started%3F"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsVisible(false)}
              className="mt-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--accent)] hover:text-[var(--primary)] transition-colors w-fit group flex items-center gap-1.5"
            >
              Chat With Us
              <Icon
                name="whatsapp"
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
