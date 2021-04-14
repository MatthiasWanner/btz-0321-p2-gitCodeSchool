import React from 'react';
import './Boxrepo.css';

function Boxrepo({ name, owner, stargazers_count }) {
  return (
    <div className="boxRepo">
      <img src={owner.avatar_url} alt={owner.login} />
      {/* logo */}
      <h2>{owner.login}</h2>
      <h3>{name}</h3>
      <p>A récolté {stargazers_count}★</p>
    </div>
  );
}

export default Boxrepo;
