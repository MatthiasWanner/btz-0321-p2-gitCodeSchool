import React from 'react';

function RepoDetails({ owner, full_name, created_at, stargazers_count, language, description }) {
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
