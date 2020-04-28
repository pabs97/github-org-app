import React from 'react';
import { withRouter } from 'react-router-dom';

const Repo = (props) => {

  const { full_name, name, id, description, language, forks_count, watchers_count, stargazers_count } = props;

  return (
    <article className='repo'>
      <h4>
        <a href={`/${full_name}`}>
          {name}
        </a>
      </h4>
      <p>{description}</p>
    </article>
  );
};

//this.props.history.push('/movie/' + id);

export default withRouter(Repo);


// Netflix/yetch
// /repos/:owner/:repo/commits
// https://api.github.com/repos/netflix/yetch/commits

const sample = {
  "id": 126055522,
  "node_id": "MDEwOlJlcG9zaXRvcnkxMjYwNTU1MjI=",
  "name": "spectator-py",
  "full_name": "Netflix/spectator-py",
  "private": false,
  "owner": {
    "login": "Netflix",
    "id": 913567,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjkxMzU2Nw==",
    "avatar_url": "https://avatars3.githubusercontent.com/u/913567?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Netflix",
    "html_url": "https://github.com/Netflix",
    "followers_url": "https://api.github.com/users/Netflix/followers",
    "following_url": "https://api.github.com/users/Netflix/following{/other_user}",
    "gists_url": "https://api.github.com/users/Netflix/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Netflix/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Netflix/subscriptions",
    "organizations_url": "https://api.github.com/users/Netflix/orgs",
    "repos_url": "https://api.github.com/users/Netflix/repos",
    "events_url": "https://api.github.com/users/Netflix/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Netflix/received_events",
    "type": "Organization",
    "site_admin": false
  },
  "html_url": "https://github.com/Netflix/spectator-py",
  "description": null,
  "fork": false,
  "url": "https://api.github.com/repos/Netflix/spectator-py",
  "forks_url": "https://api.github.com/repos/Netflix/spectator-py/forks",
  "keys_url": "https://api.github.com/repos/Netflix/spectator-py/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/Netflix/spectator-py/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/Netflix/spectator-py/teams",
  "hooks_url": "https://api.github.com/repos/Netflix/spectator-py/hooks",
  "issue_events_url": "https://api.github.com/repos/Netflix/spectator-py/issues/events{/number}",
  "events_url": "https://api.github.com/repos/Netflix/spectator-py/events",
  "assignees_url": "https://api.github.com/repos/Netflix/spectator-py/assignees{/user}",
  "branches_url": "https://api.github.com/repos/Netflix/spectator-py/branches{/branch}",
  "tags_url": "https://api.github.com/repos/Netflix/spectator-py/tags",
  "blobs_url": "https://api.github.com/repos/Netflix/spectator-py/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/Netflix/spectator-py/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/Netflix/spectator-py/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/Netflix/spectator-py/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/Netflix/spectator-py/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/Netflix/spectator-py/languages",
  "stargazers_url": "https://api.github.com/repos/Netflix/spectator-py/stargazers",
  "contributors_url": "https://api.github.com/repos/Netflix/spectator-py/contributors",
  "subscribers_url": "https://api.github.com/repos/Netflix/spectator-py/subscribers",
  "subscription_url": "https://api.github.com/repos/Netflix/spectator-py/subscription",
  "commits_url": "https://api.github.com/repos/Netflix/spectator-py/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/Netflix/spectator-py/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/Netflix/spectator-py/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/Netflix/spectator-py/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/Netflix/spectator-py/contents/{+path}",
  "compare_url": "https://api.github.com/repos/Netflix/spectator-py/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/Netflix/spectator-py/merges",
  "archive_url": "https://api.github.com/repos/Netflix/spectator-py/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/Netflix/spectator-py/downloads",
  "issues_url": "https://api.github.com/repos/Netflix/spectator-py/issues{/number}",
  "pulls_url": "https://api.github.com/repos/Netflix/spectator-py/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/Netflix/spectator-py/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/Netflix/spectator-py/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/Netflix/spectator-py/labels{/name}",
  "releases_url": "https://api.github.com/repos/Netflix/spectator-py/releases{/id}",
  "deployments_url": "https://api.github.com/repos/Netflix/spectator-py/deployments",
  "created_at": "2018-03-20T17:18:16Z",
  "updated_at": "2020-04-21T17:54:19Z",
  "pushed_at": "2020-04-21T17:54:16Z",
  "git_url": "git://github.com/Netflix/spectator-py.git",
  "ssh_url": "git@github.com:Netflix/spectator-py.git",
  "clone_url": "https://github.com/Netflix/spectator-py.git",
  "svn_url": "https://github.com/Netflix/spectator-py",
  "homepage": null,
  "size": 59,
  "stargazers_count": 31,
  "watchers_count": 31,
  "language": "Python",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 11,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 1,
  "license": {
    "key": "apache-2.0",
    "name": "Apache License 2.0",
    "spdx_id": "Apache-2.0",
    "url": "https://api.github.com/licenses/apache-2.0",
    "node_id": "MDc6TGljZW5zZTI="
  },
  "forks": 11,
  "open_issues": 1,
  "watchers": 31,
  "default_branch": "master"
};