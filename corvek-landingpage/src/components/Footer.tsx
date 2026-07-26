import { useState } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo } from './Logo'

export const Footer: FC = () => {
  const { t } = useTranslation()
  const [showComingSoon, setShowComingSoon] = useState<string | null>(null)

  const handleComingSoon = (e: React.MouseEvent, label: string) => {
    e.preventDefault()
    setShowComingSoon(label)
    setTimeout(() => setShowComingSoon(null), 3000)
  }

  return (
    <footer className="bg-white border-t border-outline/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 mb-12 md:mb-0 flex flex-col items-start">
            <div className="flex items-center gap-3 text-2xl font-headline font-bold text-on-surface mb-6">
              <Logo className="text-primary" size={32} />
              <span>{t('common.nav.brand')}</span>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm mb-6 leading-relaxed">
              {t('common.footer.description')}
            </p>
            <div className="font-mono text-[11px] font-semibold text-outline text-xs">
              &copy; {new Date().getFullYear()} {t('common.footer.copyright', { year: new Date().getFullYear() }).replace(`${new Date().getFullYear()} `, '')}
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col md:flex-row justify-end gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] font-bold text-on-surface tracking-wider uppercase">
                {t('common.footer.solutions')}
              </span>
              <nav className="flex flex-col gap-4" aria-label={t('common.footer.solutions')}>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {t('common.services.cloud.title')}
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {t('common.services.security.title')}
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {t('common.services.software.title')}
                </a>
              </nav>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] font-bold text-on-surface tracking-wider uppercase">
                {t('common.footer.company')}
              </span>
              <nav className="flex flex-col gap-4" aria-label={t('common.footer.company')}>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {t('common.footer.aboutUs')}
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {t('common.footer.consultancy')}
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {t('common.nav.contact')}
                </a>
              </nav>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 relative">
              <span className="font-mono text-[11px] font-bold text-on-surface tracking-wider uppercase">
                {t('common.footer.legal')}
              </span>
              <nav className="flex flex-col gap-4" aria-label={t('common.footer.legal')}>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                  href="/privacy-policy"
                  onClick={(e) => handleComingSoon(e, 'privacyPolicy')}
                >
                  {t('common.footer.privacyPolicy')}
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                  href="/terms-of-service"
                  onClick={(e) => handleComingSoon(e, 'termsOfService')}
                >
                  {t('common.footer.termsOfService')}
                </a>
              </nav>
              {showComingSoon && (
                <div
                  role="status"
                  aria-live="polite"
                  className="absolute bottom-0 left-0 bg-on-surface text-white text-xs px-3 py-1.5 rounded font-mono"
                >
                  {t('common.footer.comingSoon')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
