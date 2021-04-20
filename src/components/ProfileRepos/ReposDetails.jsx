import React from 'react';

function RepoDetails({ id, o, forks_count, commits_url }) {
  return (
    <div className="RepoDetails">
      <img src={owner.avatar_url} alt={owner.login} />
      {/* logo */}
      <h2>{owner.login}</h2>
      <h3>Nb de Commits {commits_url}</h3>
      <p>Nb de Forks {forks_count}</p>
    </div>
  );
}

export default RepoDetails;
