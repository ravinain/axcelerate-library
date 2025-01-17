import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem Component', () => {
  it('renders the name and email', () => {
    render(<ListItem id="1" imgUrl="test.jpg" name="John Doe" email="john.doe@example.com" />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  it('renders the image with the correct src and alt attributes', () => {
    render(<ListItem id="1" imgUrl="test.jpg" name="John Doe" email="john.doe@example.com" />);
    
    const img = screen.getByAltText('test.jpg');
    expect(img).toHaveAttribute('src', 'test.jpg');
  });
});
