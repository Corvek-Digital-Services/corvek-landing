import type { Preview } from '@storybook/react-vite'
import React from 'react'

// Import global styles and fonts
import '../src/index.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/material-symbols-outlined/index.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="bg-background text-on-surface p-8 min-h-screen">
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview