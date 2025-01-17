import { render, screen, fireEvent } from '@testing-library/react';
import { InputSearch } from './InputSearch';

describe('InputSearch Component', () => {
  it('renders the input field with a placeholder', () => {
    render(<InputSearch searchPlaceholder="Search here..." />);
    expect(screen.getByPlaceholderText('Search here...')).toBeInTheDocument();
  });

  it('calls onSearchTextChange when text is entered', () => {
    const mockOnSearchTextChange = jest.fn();
    render(<InputSearch searchPlaceholder="Search" onSearchTextChange={mockOnSearchTextChange} />);
    
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(mockOnSearchTextChange).toHaveBeenCalledWith('test');
  });

  it('updates the input value when text is entered', () => {
    render(<InputSearch searchPlaceholder="Search" />);
    
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input).toHaveValue('test');
  });
});
