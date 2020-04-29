import React from 'react';

const Commit = (props) => {
  const { org, repo, sha, commit } = props;
  const commitUrl = `https://github.com/${org}/${repo}/commits/${sha}`;

  // TODO: add a little responsiveness

  return (
    <article className='commit'>
      <h3>
        <a href={commitUrl} title="view commit on github">
          {sha}
        </a>
      </h3>
      <span>author: {commit.author.name}</span>
      <span>email: {commit.author.email}</span>
      <p>{commit.message}</p>
    </article>
  );
};

export default Commit;
