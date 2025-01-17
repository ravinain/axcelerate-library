import { render, screen, fireEvent } from '@testing-library/react';
import CollapsibleContainer from './CollapsibleContainer';

describe('CollapsibleContainer Component', () => {
  it('renders the label and children when open', () => {
    render(
      <CollapsibleContainer label="Click Me" open>
        <div>Child Content</div>
      </CollapsibleContainer>
    );

    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('toggles visibility of children when button is clicked', () => {
    render(
      <CollapsibleContainer label="Click Me">
        <div>Child Content</div>
      </CollapsibleContainer>
    );

    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(screen.getByText('Child Content')).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(screen.queryByText('Child Content')).not.toBeInTheDocument();
  });
});
