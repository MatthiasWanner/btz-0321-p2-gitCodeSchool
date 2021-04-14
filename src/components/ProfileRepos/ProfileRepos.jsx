import React from 'react';
import './ProfileRepos.css';

function ProfileRepos(props) {
  const pseudo = props.match.params.pseudo;
  return (
    <>
      <h3>Repos de {pseudo}</h3>
    </>
  );
}

export default ProfileRepos;
