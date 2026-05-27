import type { ButtonHTMLAttributes, ReactNode, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  clipStyle?: 'diagonal' | 'diagonal-reverse' | 'none'
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  clipStyle = 'none',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-6 py-2 md:px-8 md:py-3 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 focus:outline-none'
  
  const variantClasses =
    variant === 'primary'
      ? 'bg-electric-indigo text-white luminescent-glow luminescent-hover hover:bg-electric-indigo/90'
      : 'border border-electric-indigo/50 hover:border-electric-indigo text-on-surface bg-transparent hover:bg-electric-indigo/5'

  const clipClassesMap = {
    diagonal: 'clip-diagonal',
    'diagonal-reverse': 'clip-diagonal-reverse',
    none: 'rounded-sm',
  }

  const clipClasses = clipClassesMap[clipStyle]

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${clipClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
