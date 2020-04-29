import React from 'react';
import Commit from '../Commit';
import { render } from '@testing-library/react';

const testCommit = {
  org: 'alpha',
  repo: 'repo1',
  sha: 'abc123',
  commit: {
    author: {
      name: 'Albert Albertson',
      email: 'albert@albert.com',
      date: '',
    }
  }
}

describe('<Commit />', () => {
  test('correct span content', () => {
    const { container } = render(<Commit {...testCommit} />);
    const spans = container.querySelectorAll('span');

    expect(spans).toHaveLength(3);
    expect(spans[0].innerHTML).toMatch(/Albert Albertson/);
    expect(spans[1].innerHTML).toMatch(/albert@albert.com/);
  });
});
