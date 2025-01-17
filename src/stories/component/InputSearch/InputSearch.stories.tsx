import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputSearch } from '../../../component/input-search/InputSearch';

// Define metadata for the InputSearch component
const meta: Meta<typeof InputSearch> = {
  title: 'Components/InputSearch',
  component: InputSearch,
  argTypes: {
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    onSearchTextChange: {
      action: 'searchTextChanged',
      description: 'Callback when the search text changes',
    },
  },
}; 

export default meta;

type Story = StoryObj<typeof InputSearch>;

// Default story
export const Default: Story = {
  args: {
    searchPlaceholder: 'Search...',
  },
};

// Custom placeholder story
export const CustomPlaceholder: Story = {
  args: {
    searchPlaceholder: 'Enter search term',
  },
};
