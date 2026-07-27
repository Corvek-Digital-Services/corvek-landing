import { useState, useRef, useCallback } from 'react'
import type { FC, FormEvent } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Icon } from './Icon'

const INTEREST_LABELS: Record<string, string> = {
  cloud: 'common.contact.interestOptions.cloud',
  platforms: 'common.contact.interestOptions.platforms',
  software: 'common.contact.interestOptions.software',
}

interface FormErrors {
  name?: string
  email?: string
  interest?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const ContactForm: FC = () => {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const validate = useCallback((): FormErrors => {
    const newErrors: FormErrors = {}
    if (!name.trim()) {
      newErrors.name = t('common.contact.errors.nameRequired')
    }
    if (!email.trim()) {
      newErrors.email = t('common.contact.errors.emailRequired')
    } else if (!validateEmail(email)) {
      newErrors.email = t('common.contact.errors.emailInvalid')
    }
    if (!interest) {
      newErrors.interest = t('common.contact.errors.interestRequired')
    }
    return newErrors
  }, [name, email, interest, t])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    setTouched({ name: true, email: true, interest: true })

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true)
      setTimeout(() => {
        successRef.current?.focus()
      }, 100)
    } else {
      const firstErrorField = formRef.current?.querySelector('[aria-invalid="true"]') as HTMLElement
      firstErrorField?.focus()
    }
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setInterest('')
    setIsSubmitted(false)
    setErrors({})
    setTouched({})
  }

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const newErrors = validate()
    setErrors((prev) => ({
      ...prev,
      [field]: newErrors[field as keyof FormErrors],
    }))
  }

  const interestOptions = [
    { value: 'cloud', label: t('common.contact.interestOptions.cloud') },
    { value: 'platforms', label: t('common.contact.interestOptions.platforms') },
    { value: 'software', label: t('common.contact.interestOptions.software') },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-margin-mobile md:px-margin-desktop bg-background border-t border-outline/10"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 md:p-16 border border-outline/10 shadow-clean relative overflow-hidden">
        {/* Background design dot */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true"></div>

        <div className="relative z-10 text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-headline text-on-surface mb-4 font-bold">
            {t('common.contact.title')}
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant max-w-lg mx-auto">
            {t('common.contact.description')}
          </p>
        </div>

        {isSubmitted ? (
          <div
            ref={successRef}
            tabIndex={-1}
            role="status"
            aria-live="polite"
            className="relative z-10 py-12 text-center flex flex-col items-center space-y-4 outline-none"
          >
            <Icon name="task_alt" size={56} className="text-primary" />
            <h3 className="text-2xl font-headline font-bold text-on-surface">
              {t('common.contact.thankYou', { name })}
            </h3>
            <p className="text-on-surface-variant max-w-md mx-auto text-sm leading-relaxed">
              <Trans
                i18nKey="common.contact.successMessage"
                values={{ interest: t(INTEREST_LABELS[interest] || '') }}
                components={{ strong: <strong /> }}
              />
            </p>
            <button
              onClick={handleReset}
              className="mt-6 text-primary hover:text-primary-dark font-mono text-[11px] font-bold tracking-wider uppercase border border-primary/20 hover:border-primary/50 px-6 py-2.5 rounded transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t('common.contact.sendAnother')}
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-8" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name field */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="font-mono text-[11px] font-bold tracking-widest text-on-surface-variant"
                >
                  {t('common.contact.nameLabel')}
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder={t('common.contact.namePlaceholder')}
                  aria-invalid={!!(touched.name && errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full bg-transparent border-0 border-b-2 border-outline/50 focus:border-primary focus:ring-0 text-on-surface px-0 py-3 transition-all duration-200 placeholder:text-outline/70 focus:outline-none focus-visible:border-primary"
                />
                {touched.name && errors.name && (
                  <p id="name-error" role="alert" className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <Icon name="error" size={16} className="text-red-600" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="font-mono text-[11px] font-bold tracking-widest text-on-surface-variant"
                >
                  {t('common.contact.emailLabel')}
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder={t('common.contact.emailPlaceholder')}
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby={errors.email ? 'email-error' : 'email-hint'}
                  className="w-full bg-transparent border-0 border-b-2 border-outline/50 focus:border-primary focus:ring-0 text-on-surface px-0 py-3 transition-all duration-200 placeholder:text-outline/70 focus:outline-none focus-visible:border-primary"
                />
                <p id="email-hint" className="text-outline-text text-xs">{t('common.contact.emailHint')}</p>
                {touched.email && errors.email && (
                  <p id="email-error" role="alert" className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <Icon name="error" size={16} className="text-red-600" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Interest field */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="interest"
                className="font-mono text-[11px] font-bold tracking-widest text-on-surface-variant"
              >
                {t('common.contact.interestLabel')}
              </label>
              <div className="relative">
                <select
                  id="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  onBlur={() => handleBlur('interest')}
                  aria-invalid={!!(touched.interest && errors.interest)}
                  aria-describedby={errors.interest ? 'interest-error' : undefined}
                  className="w-full bg-transparent border-0 border-b-2 border-outline/50 focus:border-primary focus:ring-0 text-on-surface px-0 py-3 transition-all duration-200 appearance-none cursor-pointer focus:outline-none focus-visible:border-primary pr-8"
                >
                  <option value="" className="text-on-surface bg-white">{t('common.contact.interestPlaceholder')}</option>
                  {interestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="text-on-surface bg-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <Icon name="expand_more" size={24} className="absolute right-0 top-3 text-on-surface-variant pointer-events-none" />
              </div>
              {touched.interest && errors.interest && (
                <p id="interest-error" role="alert" className="text-red-600 text-xs mt-1 flex items-center gap-1">
                  <Icon name="error" size={16} className="text-red-600" />
                  {errors.interest}
                </p>
              )}
            </div>

            {/* Submit button */}
            <div className="pt-8 text-center">
              <button
                type="submit"
                className="w-full md:w-auto min-w-[240px] bg-primary-text hover:bg-primary-dark text-white px-10 py-5 rounded font-mono text-[12px] font-bold tracking-wider transition-all shadow-lg text-lg uppercase cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {t('common.contact.submit')}
              </button>
              <p className="mt-4 text-outline-text text-xs">
                {t('common.contact.responseNote')}
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
