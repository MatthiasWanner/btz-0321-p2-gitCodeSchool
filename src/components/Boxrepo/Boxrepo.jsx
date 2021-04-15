import React from 'react';
import PropTypes from 'prop-types';
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
Boxrepo.propTypes = {
  name: PropTypes.string,
  owner: PropTypes.object,
  stargazers_count: PropTypes.number,
};
export default Boxrepo;
