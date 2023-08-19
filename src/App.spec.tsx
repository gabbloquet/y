import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('displays title', async () => {
    render(<App />);

    const titleElement = screen.getByText(/Y is an amazing social network !/i);
    expect(titleElement).toBeInTheDocument();
  });
});
