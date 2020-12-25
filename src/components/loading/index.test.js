import { render, screen } from '@testing-library/react';
import Loading from '.';

test('renders Home component', () => {
  render(<Loading />);
  const loadingTextElement = screen.getByText(/LOOKING OUTSIDE FOR YOU... ONE SEC/i);
  expect(loadingTextElement).toBeInTheDocument();
});
