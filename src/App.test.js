import { render, screen } from '@testing-library/react';
import App from './App';

test('Current', () => {
  render(<App />);
  const linkElement = screen.getByText(/Current/i);
  expect(linkElement).toBeInTheDocument();
});
