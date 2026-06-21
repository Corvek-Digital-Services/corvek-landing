import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 200, step: 4 },
      description: 'The height and width of the logo in pixels',
    },
    className: {
      control: 'text',
      description: 'Tailwind utility classes for custom styling',
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const PrimaryColor: Story = {
  args: {
    size: 48,
    className: 'text-primary',
  },
}

export const DarkColor: Story = {
  args: {
    size: 48,
    className: 'text-on-surface',
  },
}

export const Large: Story = {
  args: {
    size: 96,
    className: 'text-primary',
  },
}
