import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'

export const Services: FC = () => {
  const { t } = useTranslation()

  return (
    <section
      id="services"
      className="py-24 px-margin-mobile md:px-margin-desktop bg-background border-t border-outline/10"
    >
      <div className="max-w-container-max mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-[40px] font-headline text-on-surface mb-2 font-bold">
              {t('common.services.title')}
            </h2>
            <div className="w-10 h-1 bg-primary rounded-sm" aria-hidden="true"></div>
          </div>
          <p className="hidden md:block text-on-surface-variant max-w-xs text-right text-sm">
            {t('common.services.subtitle')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Service 1 (Cloud) - spans 8 cols on desktop */}
          <div className="md:col-span-8 bg-white rounded-xl p-10 border border-outline/10 shadow-clean flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 text-primary">
                <Icon name="cloud_sync" size={32} filled />
              </div>
              <h3 className="text-2xl md:text-3xl font-headline text-on-surface mb-4 font-bold">
                {t('common.services.cloud.title')}
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed">
                {t('common.services.cloud.description')}
              </p>
            </div>
            <div className="mt-8">
              <a
                className="inline-flex items-center text-primary-text font-mono text-[11px] font-bold tracking-wider hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t('common.services.cloud.cta')}{' '}
                <Icon name="arrow_forward" size={20} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Service 2 (Platforms) - spans 4 cols on desktop */}
          <div className="md:col-span-4 bg-white rounded-xl p-10 border border-outline/10 shadow-clean flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 bg-primary-dark/10 rounded-lg flex items-center justify-center mb-8 text-primary-dark">
                <Icon name="rocket_launch" size={32} filled />
              </div>
              <h3 className="text-xl md:text-2xl font-headline text-on-surface mb-4 font-bold">
                {t('common.services.platforms.title')}
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                {t('common.services.platforms.description')}
              </p>
            </div>
            <div className="mt-8">
              <a
                className="inline-flex items-center text-primary-text font-mono text-[11px] font-bold tracking-wider hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t('common.services.platforms.cta')}{' '}
                <Icon name="arrow_forward" size={20} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Service 3 (Software Engineering) - spans full 12 cols on desktop */}
          <div className="md:col-span-12 bg-white rounded-xl p-10 border border-outline/10 shadow-clean flex flex-col md:flex-row justify-between items-center group gap-8">
            <div className="md:w-2/3">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 text-primary">
                <Icon name="code_blocks" size={32} filled />
              </div>
              <h3 className="text-2xl md:text-3xl font-headline text-on-surface mb-4 font-bold">
                {t('common.services.software.title')}
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                {t('common.services.software.description')}
              </p>
            </div>
            <div className="shrink-0">
              <a
                className="bg-on-surface text-white hover:bg-primary-dark px-8 py-4 rounded font-mono text-[11px] font-bold tracking-wider transition-all flex items-center gap-3 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t('common.services.software.cta')}{' '}
                <Icon name="terminal" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
