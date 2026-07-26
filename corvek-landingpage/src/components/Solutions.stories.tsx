import type { Meta, StoryObj } from '@storybook/react'
import { Solutions } from './Solutions'

const meta: Meta<typeof Solutions> = {
  title: 'Components/Solutions',
  component: Solutions,
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
type Story = StoryObj<typeof Solutions>

export const Default: Story = {}

export const Spanish: Story = {
  parameters: {
    layout: 'fullscreen',
    i18n: {
      locale: 'es',
    },
  },
}
