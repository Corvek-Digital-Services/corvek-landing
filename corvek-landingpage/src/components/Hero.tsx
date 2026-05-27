import type { FC } from 'react'
import { Button } from './Button'

export const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden origami-bg px-margin-mobile py-24 md:px-margin-desktop md:py-40">
      {/* Black bottom gradient transition */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-background"></div>

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-gutter md:grid-cols-12">
        {/* Left column: Headings and Action CTAs */}
        <div className="flex flex-col items-start space-y-8 md:col-span-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-sm border border-electric-indigo/35 bg-noche-purpura/50 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-indigo opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-indigo"></span>
            </span>
            <span>ELITE IT CONSULTING</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-[40px] font-extrabold leading-[1.2] tracking-[-0.01em] text-on-surface md:text-[64px] md:leading-[1.1] md:tracking-[-0.02em]">
            Digital Ingenuity.
            <br />
            <span className="bg-linear-to-r from-electric-indigo to-primary bg-clip-text text-transparent">
              Intelligence that Evolves.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl font-sans text-base leading-relaxed text-on-surface-variant md:text-lg">
            High-precision IT consulting solutions, inspired by agility and the strategic use of tools to transform your business.
          </p>

          {/* Actions */}
          <div className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
            <Button
              variant="primary"
              clipStyle="diagonal"
              className="flex items-center justify-center gap-2"
            >
              <span>Schedule Strategic Consultation</span>
              <span className="material-symbols-outlined text-sm font-semibold">
                arrow_forward
              </span>
            </Button>
            <Button variant="secondary" clipStyle="diagonal-reverse">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Right column: Animated Showcase */}
        <div className="relative mt-12 flex justify-center items-center md:col-span-5 md:mt-0">
          {/* Outer glow background */}
          <div className="absolute h-72 w-72 rounded-full bg-electric-indigo opacity-[0.08] blur-3xl"></div>

          {/* Glowing Showcase Frame */}
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-electric-indigo/10 bg-noche-purpura/20 p-8 backdrop-blur-sm md:h-96 md:w-96">
            {/* Spinning orbit ring 1 */}
            <div className="absolute inset-4 rounded-full border border-dashed border-electric-indigo/25 animate-[spin_40s_linear_infinite]"></div>

            {/* Spinning orbit ring 2 */}
            <div className="absolute inset-10 rounded-full border border-dashed border-primary/20 animate-[spin_25s_linear_infinite_reverse]"></div>

            {/* Glowing particle dots */}
            <div className="absolute top-1/4 left-8 h-2 w-2 rounded-full bg-electric-indigo animate-pulse"></div>
            <div className="absolute bottom-1/4 right-8 h-2 w-2 rounded-full bg-primary animate-pulse delay-700"></div>

            {/* Main Interactive Geometric Artwork */}
            <svg
              viewBox="0 0 100 100"
              className="w-4/5 filter drop-shadow-[0_0_30px_rgba(99,102,241,0.4)] animate-[pulse_4s_ease-in-out_infinite]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer structural geometric frame */}
              <polygon
                points="50,10 85,30 85,70 50,90 15,70 15,30"
                stroke="var(--color-electric-indigo)"
                strokeWidth="0.75"
                strokeDasharray="4 6"
                strokeOpacity="0.6"
              />

              {/* Glowing core origami logo paths */}
              <path
                d="M20 50 L40 30 L60 35 L80 20 L75 50 L85 70 L55 60 L40 85 Z"
                fill="var(--color-electric-indigo)"
                fillOpacity="0.25"
                stroke="var(--color-electric-indigo)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M40 30 L55 45 L40 55 Z"
                fill="var(--color-electric-indigo)"
              />
              <path
                d="M60 35 L75 50 L55 45 Z"
                fill="var(--color-primary)"
                fillOpacity="0.85"
              />
              <circle cx="45" cy="40" r="1.5" fill="var(--color-on-surface)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
