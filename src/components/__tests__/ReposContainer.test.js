import React from 'react';
import ReposContainer from '../ReposContainer';
import { render } from '@testing-library/react';

const testReposContainer = {
  language: 'Python',
  stargazers_count: 10,
  forks_count: 20,
  watchers_count: 30,
};

describe('<ReposContainer />', () => {

  test('initializes without any Repos', () => {
    const { container } = render(<ReposContainer />);
    const repos = container.querySelectorAll('.repo');
    const h2s = container.querySelectorAll('h2');

    expect(repos).toHaveLength(0);
    expect(h2s).toHaveLength(1);
    expect(h2s[0].innerHTML).toBe('');
  });
});
