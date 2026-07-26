import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'

interface SolutionCardProps {
  icon: 'cloud_sync' | 'code_blocks'
  title: string
  description: string
  cta: string
}

const SolutionCard: FC<SolutionCardProps> = ({ icon, title, description, cta }) => (
  <div className="bg-white rounded-xl p-8 border border-outline/10 shadow-clean flex flex-col justify-between group">
    <div>
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
        <Icon name={icon} size={28} filled />
      </div>
      <h3 className="text-xl font-headline text-on-surface mb-3 font-bold">
        {title}
      </h3>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
    <div className="mt-6">
      <a
        className="inline-flex items-center text-primary-text font-mono text-[11px] font-bold tracking-wider hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1"
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        {cta}{' '}
        <Icon name="arrow_forward" size={20} className="ml-1 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
)

export const Solutions: FC = () => {
  const { t } = useTranslation()

  const solutions = [
    {
      icon: 'cloud_sync' as const,
      title: t('common.solutions.migration.title'),
      description: t('common.solutions.migration.description'),
      cta: t('common.solutions.migration.cta'),
    },
    {
      icon: 'code_blocks' as const,
      title: t('common.solutions.development.title'),
      description: t('common.solutions.development.description'),
      cta: t('common.solutions.development.cta'),
    },
  ]

  return (
    <section
      id="solutions"
      className="py-24 px-margin-mobile md:px-margin-desktop bg-white border-t border-outline/10"
    >
      <div className="max-w-container-max mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-[40px] font-headline text-on-surface mb-2 font-bold">
            {t('common.solutions.title')}
          </h2>
          <div className="w-10 h-1 bg-primary rounded-sm" aria-hidden="true"></div>
          <p className="hidden md:block text-on-surface-variant max-w-lg mt-4 text-sm">
            {t('common.solutions.subtitle')}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <SolutionCard
              key={sol.title}
              icon={sol.icon}
              title={sol.title}
              description={sol.description}
              cta={sol.cta}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
