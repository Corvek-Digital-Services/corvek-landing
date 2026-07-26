import type { Meta, StoryObj } from '@storybook/react'
import { Services } from './Services'

const meta: Meta<typeof Services> = {
  title: 'Components/Services',
  component: Services,
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
type Story = StoryObj<typeof Services>

export const Default: Story = {}

export const Spanish: Story = {
  parameters: {
    layout: 'fullscreen',
    i18n: {
      locale: 'es',
    },
  },
}
