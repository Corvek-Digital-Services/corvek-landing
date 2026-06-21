import { useState } from 'react'
import type { FC, SubmitEvent } from 'react'

const INTEREST_LABELS: Record<string, string> = {
  cloud: 'Cloud Architecture',
  security: 'Cybersecurity',
  software: 'Software Engineering',
}

export const ContactForm: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.trim() && email.trim() && interest) {
      setIsSubmitted(true)
    }
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setInterest('')
    setIsSubmitted(false)
  }

  return (
    <section
      id="contact"
      className="py-24 px-margin-mobile md:px-margin-desktop bg-background border-t border-outline/10"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 md:p-16 border border-outline/10 shadow-clean relative overflow-hidden">
        {/* Background design dot */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-headline text-on-surface mb-4 font-bold">
            Start the Transformation
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant max-w-lg mx-auto">
            Schedule a strategic technical consultation with our lead architects today.
          </p>
        </div>

        {isSubmitted ? (
          <div className="relative z-10 py-12 text-center flex flex-col items-center space-y-4 animate-in fade-in duration-300">
            <span className="material-symbols-outlined text-7xl text-primary animate-bounce">
              task_alt
            </span>
            <h3 className="text-2xl font-headline font-bold text-on-surface">
              Thank You, {name}!
            </h3>
            <p className="text-on-surface-variant max-w-md mx-auto text-sm leading-relaxed">
              Your request regarding <strong>{INTEREST_LABELS[interest] || ''}</strong> has been received successfully. A lead architect will contact you within 24 business hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 text-primary hover:text-primary-dark font-mono text-[11px] font-bold tracking-wider uppercase border border-primary/20 hover:border-primary/50 px-6 py-2.5 rounded transition-all"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name field */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="font-mono text-[11px] font-bold tracking-widest text-on-surface-variant"
                >
                  FULL NAME
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 text-on-surface px-0 py-3 transition-all duration-200 placeholder:text-outline/50 focus:outline-none"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="font-mono text-[11px] font-bold tracking-widest text-on-surface-variant"
                >
                  CORPORATE EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 text-on-surface px-0 py-3 transition-all duration-200 placeholder:text-outline/50 focus:outline-none"
                />
              </div>
            </div>

            {/* Interest field */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="interest"
                className="font-mono text-[11px] font-bold tracking-widest text-on-surface-variant"
              >
                AREA OF INTEREST
              </label>
              <div className="relative">
                <select
                  id="interest"
                  required
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 text-on-surface px-0 py-3 transition-all duration-200 appearance-none cursor-pointer focus:outline-none"
                >
                  <option value="" className="text-on-surface bg-white">Select an option</option>
                  <option value="cloud" className="text-on-surface bg-white">Cloud Architecture</option>
                  <option value="security" className="text-on-surface bg-white">Cybersecurity</option>
                  <option value="software" className="text-on-surface bg-white">Software Engineering</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 top-3 text-on-surface-variant pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-8 text-center">
              <button
                type="submit"
                className="w-full md:w-auto min-w-[240px] bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded font-mono text-[12px] font-bold tracking-wider transition-all shadow-lg text-lg uppercase cursor-pointer"
              >
                REQUEST CONTACT
              </button>
              <p className="mt-4 text-outline text-xs">
                Guaranteed response within 24 business hours.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
