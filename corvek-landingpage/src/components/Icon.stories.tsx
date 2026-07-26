import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['arrow_forward', 'check_circle', 'architecture', 'cloud_sync', 'code_blocks', 'terminal', 'menu', 'close', 'error', 'task_alt', 'expand_more', 'error_outline', 'rocket_launch'],
      description: 'The icon to display',
    },
    size: {
      control: { type: 'number', min: 12, max: 96, step: 4 },
      description: 'The size of the icon in pixels',
    },
    filled: {
      control: 'boolean',
      description: 'Whether the icon should be filled',
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'svg-img-alt', enabled: true },
        ],
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const AllIcons: StoryObj = {
  render: () => (
    <div className="grid grid-cols-4 md:grid-cols-7 gap-8 p-8">
      {(['arrow_forward', 'check_circle', 'architecture', 'cloud_sync', 'code_blocks', 'terminal', 'menu', 'close', 'error', 'task_alt', 'expand_more', 'error_outline', 'rocket_launch'] as const).map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon name={name} size={32} />
          <span className="text-xs text-on-surface-variant font-mono">{name}</span>
        </div>
      ))}
    </div>
  ),
}

export const Filled: Story = {
  args: {
    name: 'cloud_sync',
    size: 48,
    filled: true,
  },
}

export const Outlined: Story = {
  args: {
    name: 'cloud_sync',
    size: 48,
    filled: false,
  },
}

export const Colored: Story = {
  render: () => (
    <div className="flex gap-8 p-8">
      <Icon name="cloud_sync" size={48} className="text-primary" />
      <Icon name="rocket_launch" size={48} className="text-primary-dark" />
      <Icon name="error" size={48} className="text-red-600" />
      <Icon name="task_alt" size={48} className="text-green-600" />
    </div>
  ),
}
