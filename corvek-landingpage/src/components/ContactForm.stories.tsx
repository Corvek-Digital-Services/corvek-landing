import type { Meta, StoryObj } from '@storybook/react'
import { ContactForm } from './ContactForm'

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'label', enabled: true },
          { id: 'aria-required-attr', enabled: true },
          { id: 'aria-valid-attr-value', enabled: true },
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ContactForm>

export const Default: Story = {}

export const Spanish: Story = {
  parameters: {
    i18n: {
      locale: 'es',
    },
  },
}
