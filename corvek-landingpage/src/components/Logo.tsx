import type { FC } from 'react'

interface LogoProps {
  className?: string
  size?: number
}

export const Logo: FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 50 L40 30 L60 35 L80 20 L75 50 L85 70 L55 60 L40 85 Z"
        fill="var(--color-electric-indigo)"
        fillOpacity="0.2"
        stroke="var(--color-electric-indigo)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M40 30 L55 45 L40 55 Z" fill="var(--color-electric-indigo)" />
      <path
        d="M60 35 L75 50 L55 45 Z"
        fill="var(--color-on-surface)"
        fillOpacity="0.8"
      />
      <circle cx="45" cy="40" r="1.5" fill="var(--color-on-surface)" />
    </svg>
  )
}
