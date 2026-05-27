import { useState } from 'react'
import type { FC } from 'react'
import { Logo } from './Logo'
import { Button } from './Button'

export const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline-variant/20 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <Logo className="text-electric-indigo" size={32} />
          <span className="font-sans text-lg font-bold tracking-tight text-on-surface">
            Corvek Digital
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="font-mono text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Services
          </a>
          <a
            href="#solutions"
            className="font-mono text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Solutions
          </a>
          <a
            href="#about"
            className="font-mono text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-mono text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Contact
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-outline-variant/40 pl-4 font-mono text-[11px]">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              ES
            </button>
            <span className="text-outline-variant/60">/</span>
            <button className="font-bold text-electric-indigo">EN</button>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" clipStyle="diagonal">
            Schedule Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex p-2 text-on-surface md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-outline-variant/20 bg-background/95 px-margin-mobile py-6 backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-6">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-primary"
            >
              Services
            </a>
            <a
              href="#solutions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-primary"
            >
              Solutions
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-primary"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-primary"
            >
              Contact
            </a>

            <div className="flex items-center gap-3 font-mono text-[13px] border-t border-outline-variant/20 pt-4">
              <span className="text-on-surface-variant">Language:</span>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                ES
              </button>
              <span className="text-outline-variant/40">/</span>
              <button className="font-bold text-electric-indigo">EN</button>
            </div>

            <Button
              variant="primary"
              clipStyle="diagonal"
              className="w-full mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
