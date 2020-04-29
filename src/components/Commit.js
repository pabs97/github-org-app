import React from 'react';
import formatDate from '../utils/date';

const Commit = (props) => {
  const { index, org, repo, sha, commit } = props;
  const commitUrl = `https://github.com/${org}/${repo}/commits/${sha}`;

  return (
    <article className='commit'>
      <h2>
        <a href={commitUrl} title="view commit on github" aria-label={`view commit ${index}`}>
          {sha}
        </a>
      </h2>
      <span>author: {commit.author.name}</span>
      <span>email: {commit.author.email}</span>
      <span>date: {formatDate(commit.author.date)}</span>
      <p>{commit.message}</p>
    </article>
  );
};

export default Commit;
