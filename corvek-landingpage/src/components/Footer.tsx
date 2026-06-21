import type { FC } from 'react'
import { Logo } from './Logo'

export const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-outline/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 mb-12 md:mb-0 flex flex-col items-start">
            <div className="flex items-center gap-3 text-2xl font-headline font-bold text-on-surface mb-6">
              <Logo className="text-primary" size={32} />
              <span>Corvek Digital</span>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm mb-6 leading-relaxed">
              Architectural IT Excellence for the modern enterprise. Bridging the gap between complex engineering and strategic business goals.
            </p>
            <div className="font-mono text-[11px] font-semibold text-outline text-xs">
              © {new Date().getFullYear()} Corvek Digital Services.
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col md:flex-row justify-end gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] font-bold text-on-surface tracking-wider uppercase">
                SOLUTIONS
              </span>
              <nav className="flex flex-col gap-4">
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#services"
                >
                  Cloud Architecture
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#services"
                >
                  Cybersecurity
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#services"
                >
                  Software Engineering
                </a>
              </nav>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] font-bold text-on-surface tracking-wider uppercase">
                COMPANY
              </span>
              <nav className="flex flex-col gap-4">
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#about"
                >
                  About Us
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#services"
                >
                  Consultancy
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#contact"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] font-bold text-on-surface tracking-wider uppercase">
                LEGAL
              </span>
              <nav className="flex flex-col gap-4">
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="/terms-of-service"
                >
                  Terms of Service
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
