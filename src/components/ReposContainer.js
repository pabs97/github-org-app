import React, { useState, useRef } from 'react';
import Repo from './Repo';
import { useForm } from '../utils/hooks';

import './ReposContainer.scss';

const SORT_BY = [
  { filter: 'name', display: 'Alphabetical' },
  { filter: 'stargazers_count', display: 'Stars' },
  { filter: 'forks_count', display: 'Forks' },
  { filter: 'watchers_count', display: 'Watchers' },
];

const ReposContainer = (props) => {
  const [submittedInput, setSubmittedInput] = useState('');
  const inputEl = useRef(null);
  const [repos, handleFormChange] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = inputEl.current.value;
    setSubmittedInput(search);
    handleFormChange(search, 'name');
  };

  const handleRadioButtons = (e) => {
    handleFormChange(submittedInput, e.target.value);
  };

  const populateRepos = () => {
    return repos.map((repo, i) => <Repo key={i} {...repo} />);
  };

  const generateResultsMessage = () => {
    if (repos.length) {
      return `Showing repos for ${submittedInput}`;
    } else if (submittedInput) {
      return `No repos for "${submittedInput}"`;
    } else {
      return '';
    }
  };

  const generateSortByRadioButtons = () => {
    if (!repos.length) return;

    return SORT_BY.map(({ filter, display }, i) => {
      return (
        <div key={i}>
          <input type="radio" id={filter} name={filter} value={filter} selected={i === 0} />
          <label htmlFor={filter}>{display}</label>
        </div>
      );
    });
  };

  return (
    <section className='repos-section'>
      <h1>Github Org Repo Search</h1>
      <form onSubmit={handleSubmit} className="repos-section__search-form" title="search a repo">
        <input className="repos-section__search-input" ref={inputEl} placeholder='Enter a repo...' type="text" />
        <input className="repos-section__search-submit" type="submit" value="Search" />
      </form>
      <form id="sortRepos" className="repos-section__radio-buttons" title="sort by options" onChange={handleRadioButtons}>
        {generateSortByRadioButtons()}
      </form>

      <h2>{generateResultsMessage()}</h2>
      <section className="repos-section__container">
        {populateRepos()}
      </section>
    </section>
  );
};

export default ReposContainer;