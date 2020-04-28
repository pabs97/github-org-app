import { useState } from 'react';
import { getRepos } from './network';

export const useForm = () => {
  const [repos, setRepos] = useState([]);

  const handleFormChange = (org, sortkey) => {
    getRepos(org, sortkey).then(repos => {
      // debugger;
      setRepos(repos);
    });
  }
  return [repos, handleFormChange];
};
