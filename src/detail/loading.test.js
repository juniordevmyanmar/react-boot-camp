import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import Detail from '.'
jest.mock('../api', () => ({
  useReducerAPI: () => {
    return {
      loading: true,
      data: {},
    }
  },
}))

test('renders Detail Loading', () => {
  const history = createMemoryHistory()
  history.push('/detail/1.11/2.11')
  render(
    <Router history={history}>
      <Route path="/detail/:lat/:lng">
        <Detail />
      </Route>
    </Router>,
  )
  const linkElement = screen.getByTestId('loading-id')
  expect(linkElement).toBeInTheDocument()
})
