import React, { useEffect, useState, useRef } from 'react';
import Repo from './Repo';
import { useForm } from '../utils/hooks';
// import { withLastLocation } from 'react-router-last-location';

import './ReposContainer.scss';

const SORT_BY = [
  { filterName: 'name', displayName: 'Alphabetical' },
  { filterName: 'starsgazers_count', displayName: 'Stars' },
  { filterName: 'forks_count', displayName: 'Forks' },
  { filterName: 'watchers_count', displayName: 'Watchers' },
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

  const generateTitle = () => {
    if (repos.length) {
      return `Showing results for ${submittedInput}`;
    } else if (submittedInput) {
      return `No results for ${submittedInput}`;
    } else {
      return '';
    }
  };

  const generateSortByRadioButtons = () => {
    if (!repos.length) return;

    return SORT_BY.map(({ filterName, displayName }, i) => {
      return (
        <div key={i}>
          <input type="radio" id={filterName} name="drone" value={filterName} selected={i === 0} />
          <label htmlFor={filterName}>{displayName}</label>
        </div>
      );
    });
  };



  // TODO: add appropriate aria, and test for accessibility
  // TODO: make sure there is browser caching

  return (
    <section className='repos-section'>
      <form onSubmit={handleSubmit}>
        <input ref={inputEl} className='repos-section__search' placeholder='Enter a repo...' type="text" />
        <input type="submit" value="Search" />
      </form>
      <form className="repos-section__radio-buttons" onChange={handleRadioButtons}>
        {generateSortByRadioButtons()}
      </form>

      <h2>{generateTitle()}</h2>
      <section className="repos-section__container">
        {populateRepos()}
      </section>
    </section>
  );
};


export default ReposContainer;