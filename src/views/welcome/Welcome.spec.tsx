import { render, screen } from '@testing-library/react';
import { Welcome } from './index';

describe('Welcome view', () => {
  it('shows React Tutorial link', () => {
    render(<Welcome />);

    const linkElement = screen.getByText(/React Tutorial/i);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://fr.reactjs.org/tutorial/tutorial.html');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('shows React Getting Started link', () => {
    render(<Welcome />);

    const linkElement = screen.getByText(/React Getting Started/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://fr.reactjs.org/docs/getting-started.html');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('shows React Starter issues link', () => {
    render(<Welcome />);

    const linkElement = screen.getByText(/React starter issues/i);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      'href',
      'https://github.com/gabbloquet/starter-react/issues'
    );
    expect(linkElement).toHaveAttribute('target', '_blank');
  });
});
