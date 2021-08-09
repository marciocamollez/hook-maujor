import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderização do Link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
