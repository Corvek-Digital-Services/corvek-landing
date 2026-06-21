import type { FC } from 'react'

export const Services: FC = () => {
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
              Precision Architecture
            </h2>
            <div className="w-10 h-1 bg-primary rounded-sm"></div>
          </div>
          <p className="hidden md:block text-on-surface-variant max-w-xs text-right text-sm">
            Methodical approach to complex technological challenges.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Service 1 (Cloud) - spans 8 cols on desktop */}
          <div className="md:col-span-8 bg-white rounded-xl p-10 border border-outline/10 shadow-clean flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 text-primary">
                <span className="material-symbols-outlined text-3xl icon-filled">
                  cloud_sync
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-headline text-on-surface mb-4 font-bold">
                Cloud Architecture
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed">
                Intelligent scaling and resilient infrastructures designed for high availability and peak performance in global environments.
              </p>
            </div>
            <div className="mt-8">
              <a
                className="inline-flex items-center text-primary-dark font-mono text-[11px] font-bold tracking-wider hover:gap-3 transition-all"
                href="#contact"
              >
                EXPLORE SOLUTIONS{' '}
                <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Service 2 (Cybersecurity) - spans 4 cols on desktop */}
          <div className="md:col-span-4 bg-white rounded-xl p-10 border border-outline/10 shadow-clean flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 bg-primary-dark/10 rounded-lg flex items-center justify-center mb-8 text-primary-dark">
                <span className="material-symbols-outlined text-3xl icon-filled">
                  security
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-headline text-on-surface mb-4 font-bold">
                Cybersecurity
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                Proactive asset shielding and Zero Trust architectures to protect your most valuable business intelligence.
              </p>
            </div>
            <div className="mt-8">
              <a
                className="inline-flex items-center text-primary-dark font-mono text-[11px] font-bold tracking-wider hover:gap-3 transition-all"
                href="#contact"
              >
                SECURE ASSETS{' '}
                <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Service 3 (Software Engineering) - spans full 12 cols on desktop */}
          <div className="md:col-span-12 bg-white rounded-xl p-10 border border-outline/10 shadow-clean flex flex-col md:flex-row justify-between items-center group gap-8">
            <div className="md:w-2/3">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 text-primary">
                <span className="material-symbols-outlined text-3xl icon-filled">
                  code_blocks
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-headline text-on-surface mb-4 font-bold">
                Software Engineering
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                Robust and handcrafted code. Complex systems development with advanced design patterns and rigorous quality assurance.
              </p>
            </div>
            <div className="shrink-0">
              <a
                className="bg-on-surface text-white hover:bg-primary-dark px-8 py-4 rounded font-mono text-[11px] font-bold tracking-wider transition-all flex items-center gap-3 shadow-md"
                href="#contact"
              >
                VIEW METHODOLOGY{' '}
                <span className="material-symbols-outlined text-sm">
                  terminal
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
