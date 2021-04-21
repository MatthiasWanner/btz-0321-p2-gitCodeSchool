import React from 'react';

function RepoDetails({ id, o, forks_count, commits_url }) {
  return (
    <div className="RepoDetails">
      <br />
      <br />
      <h2>{owner.login} NOM DU GARS </h2>

      <p>{description}</p>

      <p>NOM DU REPOS {full_name}</p>

      <p>{created_at}</p>

      <p>{stargazers_count}</p>

      <p>{language}</p>
    </div>
  );
}

export default RepoDetails;
