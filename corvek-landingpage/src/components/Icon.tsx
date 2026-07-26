import type { FC } from 'react'

type IconName =
  | 'arrow_forward'
  | 'check_circle'
  | 'architecture'
  | 'precision_manufacturing'
  | 'cloud_sync'
  | 'security'
  | 'code_blocks'
  | 'terminal'
  | 'menu'
  | 'close'
  | 'error'
  | 'task_alt'
  | 'expand_more'
  | 'error_outline'

interface IconProps {
  name: IconName
  size?: number
  className?: string
  filled?: boolean
}

const paths: Record<IconName, string> = {
  arrow_forward: 'M5 12h14m-7-7 7 7-7 7',
  check_circle: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  architecture: 'M12 2L2 7l2 1v9l8 3 8-3V8l2-1L12 2zm0 2.5L18.5 7 12 9.5 5.5 7 12 4.5zM4 9.5l7 3v7l-7-3v-7zm9 10v-7l7-3v7l-7 3z',
  precision_manufacturing: 'M7 2v11h3v9l7-12h-4l4-8H7z',
  cloud_sync: 'M7 16a5 5 0 01-.66-9.96A7 7 0 0119.34 8.5 5 5 0 0117 17.5H7zm7.5-1.5a2 2 0 100-4 2 2 0 000 4zm1-4l-2 2-2-2 1.5-1.5L16 12l-1.5 1.5L15.5 10.5z',
  security: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
  code_blocks: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
  terminal: 'M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM7.5 15l-1-1L9 11.5 6.5 9l1-1 3.5 3.5a1 1 0 010 1.4L7.5 15zm9 0h-5v-2h5v2z',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'M6 6l12 12M18 6L6 18',
  error: 'M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
  task_alt: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z',
  expand_more: 'M6 9l6 6 6-6',
  error_outline: 'M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
}

export const Icon: FC<IconProps> = ({ name, size = 24, className = '', filled = false }) => {
  const path = paths[name]
  if (!path) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={filled ? 0 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  )
}
