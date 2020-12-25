import { render, screen } from '@testing-library/react';
import Card from '.';

test('renders Card Component', () => {
  render(<Card name="City" population="123456" />);
  const linkElement = screen.getByText(/City/i);
  const populationElement = screen.getByText(/123456/i);
  expect(linkElement).toBeInTheDocument();
  expect(populationElement).toBeInTheDocument();
});
