import type { Meta, StoryObj } from '@storybook/react'
import { Values } from './Values'

const meta: Meta<typeof Values> = {
  title: 'Components/Values',
  component: Values,
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
type Story = StoryObj<typeof Values>

export const Default: Story = {}

export const Spanish: Story = {
  parameters: {
    layout: 'fullscreen',
    i18n: {
      locale: 'es',
    },
  },
}
