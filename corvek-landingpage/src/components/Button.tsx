import type { ButtonHTMLAttributes, ReactNode, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-6 py-2.5 md:px-8 md:py-4 font-mono text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 focus:outline-none rounded'
  
  const variantClasses =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md'
      : 'border border-outline hover:border-primary hover:text-primary text-on-surface-variant bg-transparent'

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
