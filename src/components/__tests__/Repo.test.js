import React from 'react';
import Repo from '../Repo';
import { render } from '@testing-library/react';

const testRepo = {
  language: 'Python',
  stargazers_count: 10,
  forks_count: 20,
  watchers_count: 30,
};

describe('<Repo />', () => {

  test('correct span content', () => {
    const { container } = render(<Repo {...testRepo} />);
    const spans = container.querySelectorAll('span');

    expect(spans).toHaveLength(4);
    expect(spans[0].innerHTML).toMatch(/Python/);
    expect(spans[1].innerHTML).toMatch(/10/);
  });
});
