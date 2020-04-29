import { useState, useEffect } from 'react';
import { getRepos, getCommits } from './network';

export const useForm = () => {
  const [repos, setRepos] = useState([]);

  const handleFormChange = (org, sortkey) => {
    getRepos(org, sortkey).then(setRepos);
  };
  return [repos, handleFormChange];
};

export const useCommits = (owner, repo) => {
  const [commits, setCommits] = useState([]);
  useEffect(() => {
    getCommits(owner, repo).then(setCommits);
  }, [owner, repo]);

  return commits;
}