const endpoint = 'http://localhost:3001';

export function getRepos(org, sortkey) {
  const url = `${endpoint}/org/${org}?sortkey=${sortkey}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch((e) => {
      console.error(e);
      return [];
    });
}

