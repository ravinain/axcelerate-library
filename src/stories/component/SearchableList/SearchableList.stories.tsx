import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SearchableList from '../../../component/searchable-list/SearchableList';
import { SearchableListProps } from '../../../@types/component/searchable-list/SearchableList';
import { ListItemProps } from '../../../@types/component/list-item/ListItem';

const meta: Meta<typeof SearchableList> = {
  title: 'Components/SearchableList',
  component: SearchableList,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of section headers, each containing a list of items',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    onSearch: {
      control: false,
      description: 'Custom search function for filtering items',
    },
    searchCaseSensitive: {
      control: 'boolean',
      description: 'Enable or disable case-sensitive search',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchableList>;

// Example data
const exampleItems: SearchableListProps['items'] = [
  {
    id: 1,
    label: 'Section 1',
    items: [
      { id: '1', imgUrl: 'https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg', name: 'Alice', email: 'alice@example.com' },
      { id: '2', imgUrl: 'https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg', name: 'Bob', email: 'bob@example.com' },
    ],
  },
  {
    id: 2,
    label: 'Section 2',
    items: [
      { id: '3', imgUrl: 'https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg', name: 'Charlie', email: 'charlie@example.com' },
      { id: '4', imgUrl: 'https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg', name: 'Dave', email: 'dave@example.com' },
    ],
  },
];

export const Default: Story = {
  args: {
    items: exampleItems,
    searchPlaceholder: 'Search by name...',
    searchCaseSensitive: false,
  },
};

export const CaseSensitiveSearch: Story = {
  args: {
    items: exampleItems,
    searchPlaceholder: 'Search (case-sensitive)',
    searchCaseSensitive: true,
  },
};

export const CustomSearch: Story = {
  args: {
    items: exampleItems,
    searchPlaceholder: 'Custom Search (Search value ends with)',
    onSearch: (item: ListItemProps, searchText: string) =>
      item.name.toLowerCase().endsWith(searchText.toLowerCase()),
    searchCaseSensitive: false,
  },
};
