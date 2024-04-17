import { Meta, StoryObj } from '@storybook/react';

import Example from '@/components/Example';

const meta: Meta<typeof Example> = {
  title: 'Example',
  component: Example,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Example>;
export const Primary: Story = {};
