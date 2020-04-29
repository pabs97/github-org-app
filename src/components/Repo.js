import React from 'react';

const Repo = (props) => {
  const { full_name, name, description, language, forks_count, watchers_count, stargazers_count } = props;

  return (
    <article className='repo'>
      <h3>
        <a href={`/${full_name}`} title="view commits">
          {name}
        </a>
      </h3>
      <p>{description}</p>
      <span>language: {language}</span>
      <span>stars: {stargazers_count}</span>
      <span>forks: {forks_count}</span>
      <span>watchers: {watchers_count}</span>
    </article>
  );
};

export default Repo;
