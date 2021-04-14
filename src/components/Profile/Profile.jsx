import React from 'react';
import './Profile.css';

function Profile(props) {
  const pseudo = props.match.params.pseudo;
  return (
    <>
      <h3>Profil de {pseudo}</h3>
    </>
  );
}

export default Profile;
