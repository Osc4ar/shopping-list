import { render, screen } from '@testing-library/react';
import App from './App';

test('renders add button', () => {
  render(<App />);

  expect(screen.getByRole('button')).toBeTruthy();
});
