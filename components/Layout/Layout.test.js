import React from 'react';
import {render, screen } from '@testing-library/react';

import Layout from './Layout';

test('Layout', () => {
  const testMessage = 'Content';
  render(<Layout>{testMessage}</Layout>);

  expect(screen.queryByText(testMessage)).toMatchSnapshot();
});
