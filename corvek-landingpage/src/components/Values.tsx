import type { FC } from 'react'

export const Values: FC = () => {
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
              The Corvek Factor
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant mb-10 leading-relaxed">
              Our philosophy is based on pragmatic intelligence, complex problem solving, and technical mastery. We don't just implement technology; we orchestrate solutions that drive real-world value.
            </p>
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                  <span className="material-symbols-outlined font-bold">
                    check_circle
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-headline text-on-surface mb-1 font-bold">
                    Pragmatic Intelligence
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Viable and scalable solutions, not just theoretical ones that look good on paper.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                  <span className="material-symbols-outlined font-bold">
                    architecture
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-headline text-on-surface mb-1 font-bold">
                    Technical Mastery
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Excellence in every line of code and infrastructure node we touch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: decorative visual asset */}
          <div className="relative">
            <div className="aspect-square bg-surface-container rounded-3xl flex flex-col items-center justify-center p-16 border border-outline/10 shadow-clean">
              <div className="text-center">
                <span className="material-symbols-outlined text-7xl text-primary mb-6 icon-filled">
                  precision_manufacturing
                </span>
                <h3 className="text-2xl font-headline text-on-surface font-bold">
                  Absolute Precision
                </h3>
                <p className="text-on-surface-variant mt-4 font-mono text-[11px] font-semibold tracking-widest uppercase">
                  OUR CORE STANDARD
                </p>
              </div>
            </div>
            {/* Glowing glow effect background */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
