import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'aria-required-attr', enabled: true },
          { id: 'aria-allowed-attr', enabled: true },
        ],
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Default: Story = {}

export const Spanish: Story = {
  parameters: {
    layout: 'fullscreen',
    i18n: {
      locale: 'es',
    },
  },
}
