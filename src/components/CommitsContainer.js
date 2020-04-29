import React from 'react';
import { withLastLocation } from 'react-router-last-location';
import { useCommits } from '../utils/hooks';

import Commit from './Commit';
import './CommitsContainer.scss';

const CommitsContainer = (props) => {
  const { org, repo } = props.match.params;
  const commits = useCommits(org, repo);

  const populateCommits = () => {
    return commits.map((commit, i) => <Commit key={i} index={i} {...commit} org={org} repo={repo} />);
  };

  return (
    <section className='commits-section'>
      <h1>Recent commits for {`${org}/${repo}`}</h1>
      {populateCommits()}
    </section>
  );
};

export default withLastLocation(CommitsContainer);