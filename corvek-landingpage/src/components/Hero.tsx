import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './Button'
import { Logo } from './Logo'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export const Hero: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 px-margin-mobile md:px-margin-desktop overflow-hidden bg-white">
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container/50 -skew-x-12 transform translate-x-1/2 pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Left column: Badge, Heading, and CTAs */}
        <div className="md:col-span-7 flex flex-col items-start space-y-stack-md">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 text-primary-dark font-mono text-[11px] font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary mr-2" aria-hidden="true" />{t('common.hero.badge')}
          </div>

          {/* Heading */}
          <h1 className="text-[40px] md:text-[64px] font-headline text-on-surface tracking-tight leading-[1.2] md:leading-[1.1] font-extrabold">
            {t('common.hero.title')}
            <br />
            <span className="text-primary-dark">{t('common.hero.subtitle')}</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {t('common.hero.description')}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              className="flex items-center justify-center gap-2 group w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              <span>{t('common.hero.ctaPrimary')}</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">
                arrow_forward
              </span>
            </Button>
            <Button
              variant="secondary"
              className="flex items-center justify-center gap-2 w-full sm:w-auto"
              onClick={() => scrollToSection('services')}
            >
              {t('common.hero.ctaSecondary')}
            </Button>
          </div>
        </div>

        {/* Right column: Geometric Logo Showcase */}
        <div className="md:col-span-5 hidden md:flex justify-center items-center relative">
          <div className="relative p-8 bg-surface-container rounded-2xl">
            <div className="relative">
              <Logo className="text-primary drop-shadow-xl" size={280} />
              {/* Decorative geometric accents */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary/20 rounded-lg rotate-12" aria-hidden="true"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-2 border-primary-dark/20 rounded-full" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
