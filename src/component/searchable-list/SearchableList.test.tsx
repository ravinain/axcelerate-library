import { render, screen, fireEvent } from '@testing-library/react';
import SearchableList from './SearchableList';

const mockItems = [
  {
    id: 1,
    label: 'Section 1',
    items: [
      { id: '1', imgUrl: 'test1.jpg', name: 'Alice', email: 'alice@example.com' },
      { id: '2', imgUrl: 'test2.jpg', name: 'Bob', email: 'bob@example.com' },
    ],
  },
  {
    id: 2,
    label: 'Section 2',
    items: [
      { id: '3', imgUrl: 'test3.jpg', name: 'Charlie', email: 'charlie@example.com' },
      { id: '4', imgUrl: 'test4.jpg', name: 'Dave', email: 'dave@example.com' },
    ],
  },
];

describe('SearchableList Component', () => {
  it('renders sections and items', () => {
    render(<SearchableList items={mockItems} />);

    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
    expect(screen.getByText('Dave')).toBeInTheDocument();
  });

  it('filters items based on search text', () => {
    render(<SearchableList items={mockItems} searchPlaceholder="Search by name" />);

    const input = screen.getByPlaceholderText('Search by name');
    fireEvent.change(input, { target: { value: 'Alice' } });

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
  });

  it('calls custom onSearch function if provided', () => {
    const customSearch = jest.fn((item, searchText) => item.name.startsWith(searchText));
    render(
      <SearchableList items={mockItems} searchPlaceholder="Custom Search" onSearch={customSearch} />
    );

    const input = screen.getByPlaceholderText('Custom Search');
    fireEvent.change(input, { target: { value: 'A' } });

    expect(customSearch).toHaveBeenCalled();
  });
});
