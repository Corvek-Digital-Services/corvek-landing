import type { FC } from 'react'

type IconName =
  | 'arrow_forward'
  | 'check_circle'
  | 'architecture'
  | 'cloud_sync'
  | 'code_blocks'
  | 'terminal'
  | 'menu'
  | 'close'
  | 'error'
  | 'task_alt'
  | 'expand_more'
  | 'error_outline'
  | 'rocket_launch'

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

const icons: Record<IconName, FC> = {
  arrow_forward: () => (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  check_circle: () => (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </>
  ),
  architecture: () => (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M10 9h4" />
      <path d="M10 13h4" />
    </>
  ),
  cloud_sync: () => (
    <>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="m12 14 2 2-2 2" />
      <path d="m16 14 2 2-2 2" />
      <path d="m12 10-2-2 2-2" />
      <path d="m8 10-2-2 2-2" />
    </>
  ),
  code_blocks: () => (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  terminal: () => (
    <>
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </>
  ),
  menu: () => (
    <>
      <path d="M4 12h16" />
      <path d="M4 6h16" />
      <path d="M4 18h16" />
    </>
  ),
  close: () => (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  error: () => (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </>
  ),
  task_alt: () => (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </>
  ),
  expand_more: () => (
    <path d="m6 9 6 6 6-6" />
  ),
  error_outline: () => (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </>
  ),
  rocket_launch: () => (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
}

export const Icon: FC<IconProps> = ({ name, size = 24, className = '' }) => {
  const IconComponent = icons[name]
  if (!IconComponent) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <IconComponent />
    </svg>
  )
}
