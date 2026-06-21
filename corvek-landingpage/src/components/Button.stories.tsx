import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style variant of the button',
    },
    children: {
      control: 'text',
      description: 'The text or elements inside the button',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Schedule Consultation',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Explore Services',
  },
}
