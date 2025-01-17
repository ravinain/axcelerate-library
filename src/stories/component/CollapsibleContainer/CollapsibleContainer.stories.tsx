import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CollapsibleContainer from '../../../component/collapsible-container/CollapsibleContainer';

const meta: Meta<typeof CollapsibleContainer> = {
  title: 'Components/CollapsibleContainer',
  component: CollapsibleContainer,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the collapsible container header',
    },
    open: {
      control: 'boolean',
      description: 'Initial state of the collapsible container',
    },
    children: {
      control: 'text',
      description: 'Content displayed inside the collapsible container when open',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CollapsibleContainer>;

export const Default: Story = {
  args: {
    label: 'Click to Expand',
    open: false,
    children: 'This is the content inside the collapsible container.',
  },
};

export const OpenByDefault: Story = {
  args: {
    label: 'Open Section',
    open: true,
    children: 'This section is expanded by default.',
  },
};
