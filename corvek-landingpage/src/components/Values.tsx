import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'

export const Values: FC = () => {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="py-24 px-margin-mobile md:px-margin-desktop bg-white relative overflow-hidden border-t border-outline/10"
    >
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left Column: text description and items */}
          <div>
            <h2 className="text-3xl md:text-[40px] font-headline text-on-surface mb-6 font-bold">
              {t('common.values.title')}
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant mb-10 leading-relaxed">
              {t('common.values.description')}
            </p>
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                  <Icon name="check_circle" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-headline text-on-surface mb-1 font-bold">
                    {t('common.values.pragmatic.title')}
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    {t('common.values.pragmatic.description')}
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                  <Icon name="architecture" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-headline text-on-surface mb-1 font-bold">
                    {t('common.values.mastery.title')}
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    {t('common.values.mastery.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: decorative visual asset */}
          <div className="relative">
            <div className="aspect-square bg-surface-container rounded-3xl flex flex-col items-center justify-center p-16 border border-outline/10 shadow-clean">
              <div className="text-center">
                <Icon name="precision_manufacturing" size={56} className="text-primary mb-6" filled />
                <h3 className="text-2xl font-headline text-on-surface font-bold">
                  {t('common.values.precision.title')}
                </h3>
                <p className="text-on-surface-variant mt-4 font-mono text-[11px] font-semibold tracking-widest uppercase">
                  {t('common.values.precision.subtitle')}
                </p>
              </div>
            </div>
            {/* Glowing glow effect background */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
