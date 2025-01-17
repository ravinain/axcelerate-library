import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ListItem from '../../../component/list-item/ListItem';

// Define metadata for the ListItem component
const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  argTypes: {
    imgUrl: {
      control: 'text',
      description: 'URL of the thumbnail image',
    },
    name: {
      control: 'text',
      description: 'Name of the item',
    },
    email: {
      control: 'text',
      description: 'Email of the item (optional)',
    },
  },
};

export default meta;

// Define story types using StoryObj
type Story = StoryObj<typeof ListItem>;

// Default story
export const Default: Story = {
  args: {
    imgUrl: 'https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg',
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
};

// Without email story
export const WithoutEmail: Story = {
  args: {
    imgUrl: 'https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg',
    name: 'Jane Doe',
  },
};
