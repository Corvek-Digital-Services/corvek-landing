import type { FC } from 'react'
import { Button } from './Button'

export const Hero: FC = () => {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 px-margin-mobile md:px-margin-desktop overflow-hidden bg-white">
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container/50 -skew-x-12 transform translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Left column: Badge, Heading, and CTAs */}
        <div className="md:col-span-7 flex flex-col items-start space-y-stack-md">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 text-primary-dark font-mono text-[11px] font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary mr-2" />ELITE IT CONSULTING
          </div>

          {/* Heading */}
          <h1 className="text-[40px] md:text-[64px] font-headline text-on-surface tracking-tight leading-[1.2] md:leading-[1.1] font-extrabold">
            Digital Ingenuity.
            <br />
            <span className="text-primary-dark">Intelligence that Evolves.</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            High-precision IT consulting solutions, inspired by agility and the strategic use of tools to transform your business into a digital powerhouse.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              className="flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <span>Schedule Strategic Consultation</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Button>
            <Button
              variant="secondary"
              className="flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Right column: Geometric Logo Showcase */}
        <div className="md:col-span-5 hidden md:flex justify-center items-center relative">
          <div className="relative p-8 bg-surface-container rounded-2xl">
            <img
              alt="Corvek Digital Geometric Logo"
              className="w-full max-w-sm drop-shadow-xl"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtysZqQI5lsIsGTeOg-mYUNI99bejiJiWs76od-Du3rT6MrRZPleeUwZz7kFxEGbjGNH5EerUhikf0COTkV7yiLXtzWXD3lxLosUDMjxJsYx-YLQqJAFAewrUg5eWXFQSoGUa15Qnsp-5FGGBY0UgLkp2g3r-4Sskpjd50-DAgY9M0o2MKlgMDciPOfU7ZguPeIPqZhGv1oZo47VylaRFZ7jfop82xCSRQy_P8rb2HVC96bfL5PRAf7Rr4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
