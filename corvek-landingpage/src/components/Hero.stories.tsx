import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'heading-order', enabled: true },
        ],
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {}

export const Spanish: Story = {
  parameters: {
    layout: 'fullscreen',
    i18n: {
      locale: 'es',
    },
  },
}
