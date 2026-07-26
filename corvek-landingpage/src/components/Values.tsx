import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'

export const Values: FC = () => {
  const { t } = useTranslation()

  const values = [
    {
      icon: 'check_circle' as const,
      title: t('common.values.commitment.title'),
      description: t('common.values.commitment.description'),
    },
    {
      icon: 'code_blocks' as const,
      title: t('common.values.quality.title'),
      description: t('common.values.quality.description'),
    },
    {
      icon: 'architecture' as const,
      title: t('common.values.context.title'),
      description: t('common.values.context.description'),
    },
    {
      icon: 'rocket_launch' as const,
      title: t('common.values.propose.title'),
      description: t('common.values.propose.description'),
    },
  ]

  return (
    <section
      id="about"
      className="py-24 px-margin-mobile md:px-margin-desktop bg-white border-t border-outline/10"
    >
      <div className="max-w-container-max mx-auto">
        <h2 className="text-3xl md:text-[40px] font-headline text-on-surface mb-6 font-bold">
          {t('common.values.title')}
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant mb-12 max-w-3xl leading-relaxed">
          {t('common.values.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val) => (
            <div key={val.title} className="flex items-start gap-6">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                <Icon name={val.icon} size={24} />
              </div>
              <div>
                <h3 className="text-lg font-headline text-on-surface mb-1 font-bold">
                  {val.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
