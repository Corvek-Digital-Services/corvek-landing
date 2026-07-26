import { useState, useEffect, useRef, useCallback } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo } from './Logo'
import { Button } from './Button'
import { Icon } from './Icon'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const currentLang = i18n.language.startsWith('es') ? 'es' : 'en'

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    toggleRef.current?.focus()
  }, [])

  const switchLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang)
    },
    [i18n],
  )

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen, closeMenu])

  // Focus trap in mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && menuRef.current) {
      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      first?.focus()

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault()
              last?.focus()
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault()
              first?.focus()
            }
          }
        }
      }

      document.addEventListener('keydown', handleTab)
      return () => document.removeEventListener('keydown', handleTab)
    }
  }, [isMobileMenuOpen])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '#services', label: t('common.nav.services') },
    { href: '#solutions', label: t('common.nav.solutions') },
    { href: '#about', label: t('common.nav.about') },
    { href: '#contact', label: t('common.nav.contact') },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline/20 bg-white/80 backdrop-blur-md" aria-label={t('common.nav.brand')}>
      <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <Logo className="text-primary" size={32} />
          <span className="font-headline text-[22px] font-bold tracking-tight text-on-surface">
            {t('common.nav.brand')}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href.slice(1))
              }}
              className="font-mono text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant transition-colors duration-300 hover:text-primary-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <div
            className="flex items-center gap-2 border-l border-outline/30 pl-4 font-mono text-[11px]"
            role="group"
            aria-label={t('common.nav.languageLabel')}
          >
            <button
              type="button"
              aria-pressed={currentLang === 'es'}
              onClick={() => switchLanguage('es')}
              className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1 ${currentLang === 'es' ? 'font-bold text-primary-text' : 'text-on-surface-variant hover:text-primary-text'}`}
            >
              ES
            </button>
            <span className="text-outline/50" aria-hidden="true">/</span>
            <button
              type="button"
              aria-pressed={currentLang === 'en'}
              onClick={() => switchLanguage('en')}
              className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1 ${currentLang === 'en' ? 'font-bold text-primary-text' : 'text-on-surface-variant hover:text-primary-text'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" onClick={() => scrollToSection('contact')}>
            {t('common.nav.scheduleConsultation')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={toggleRef}
          type="button"
          className="flex p-2 text-on-surface md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          onClick={toggleMenu}
          aria-label={t('common.nav.toggleMenu')}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t('common.nav.mobileMenuLabel')}
          className="absolute top-full left-0 w-full border-b border-outline/20 bg-white/95 px-margin-mobile py-6 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href.slice(1))
                  closeMenu()
                }}
                className="font-mono text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-3 font-mono text-[13px] border-t border-outline/20 pt-4">
              <span className="text-on-surface-variant">{t('common.nav.languageLabel')}:</span>
              <button
                type="button"
                aria-pressed={currentLang === 'es'}
                onClick={() => switchLanguage('es')}
                className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1 py-0.5 ${currentLang === 'es' ? 'font-bold text-primary-text' : 'text-on-surface-variant hover:text-primary-text'}`}
              >
                ES
              </button>
              <span className="text-outline/40" aria-hidden="true">/</span>
              <button
                type="button"
                aria-pressed={currentLang === 'en'}
                onClick={() => switchLanguage('en')}
                className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1 py-0.5 ${currentLang === 'en' ? 'font-bold text-primary-text' : 'text-on-surface-variant hover:text-primary-text'}`}
              >
                EN
              </button>
            </div>

            <Button
              variant="primary"
              className="w-full mt-2"
              onClick={() => {
                scrollToSection('contact')
                closeMenu()
              }}
            >
              {t('common.nav.scheduleConsultation')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
