import React, { useEffect } from 'react';
import { withLastLocation } from 'react-router-last-location';

const CommitsContainer = (props) => {


  // this.props.match.params.id
  const { org, repo, blah } = props.match.params;

  useEffect(() => {
    const [commits, setCommits] = useState([]);


  });


  return (
    <section>
      commits container
      <span>{org}...{repo}...{blah}</span>
    </section>
  );
};

export default withLastLocation(CommitsContainer);