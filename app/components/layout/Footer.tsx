import Link from "next/link";
import Icon from "@/app/components/ui/Icons";
import { footerExploreLinks } from "@/app/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--background)] pt-12 pb-8 md:pt-16 md:pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16 mb-12">
          
          {/* Column 1: Brand & Disclaimer */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
            <div className="mb-6 md:mb-0">
              <span className="text-3xl font-bold tracking-tight text-[var(--primary)] block" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                Riḍā by Rahma
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mt-2 block">
                Online Psychological Services
              </span>
            </div>
            
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed hidden md:block max-w-sm mt-8 opacity-80">
              <span className="font-semibold text-[var(--primary)]">Disclaimer:</span> This website is for educational purposes only and does not substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] mb-5">
              Explore
            </h4>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-4">
              {footerExploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] mb-5">
              Support & Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                  <Icon name="phone" className="w-3 h-3 text-[var(--accent)]" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-[var(--text-secondary)]">Book via WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                  <Icon name="email" className="w-3 h-3 text-[var(--accent)]" />
                </div>
                <span className="text-xs font-medium text-[var(--text-secondary)]">Email Support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                  <Icon name="video" className="w-3 h-3 text-[var(--accent)]" />
                </div>
                <span className="text-xs font-medium text-[var(--text-secondary)]">Online Sessions Available</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                  <Icon name="lock" className="w-3 h-3 text-[var(--accent)]" />
                </div>
                <span className="text-xs font-medium text-[var(--text-secondary)]">Confidential & Secure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Disclaimer (only shown on small screens) */}
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed md:hidden mb-8 text-center opacity-80">
          <span className="font-semibold text-[var(--primary)]">Disclaimer:</span> This website is for educational purposes only and does not substitute for professional medical advice, diagnosis, or treatment.
        </p>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium text-[var(--text-muted-color)]">
            &copy; {currentYear} Riḍā by Rahma. All Rights Reserved.
          </p>
          <div className="text-[11px] font-medium text-[var(--text-muted-color)]">
            Developed by <a href="#" className="text-[var(--accent)] hover:text-[var(--primary)] transition-colors underline-offset-4 hover:underline">Shaamil</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
