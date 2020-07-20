import React from 'react';

import { render } from '@testing-library/react';

import App from '../App';

test('renders Magrathea Labs title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Magrathea Labs/i);
  expect(linkElement).toBeInTheDocument();
});
