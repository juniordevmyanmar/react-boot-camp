import { render, screen } from '@testing-library/react';
import Detail from '.';

test('renders Detail component', () => {
  render(<Detail />);
  const linkElement = screen.getByText(/Detail/i);
  expect(linkElement).toBeInTheDocument();
});
