import { render, screen } from '@testing-library/react';
import Detail from '.';
import {Route} from 'react-router'

test('renders Detail component', () => {
  render( <Route path="/detail/:lat/:lng">
  <Detail />
</Route>);
  const linkElement = screen.getByText(/Detail/i);
  expect(linkElement).toBeInTheDocument();
});
