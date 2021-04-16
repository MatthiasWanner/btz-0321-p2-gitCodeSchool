import React from 'react';
import './Profile.css';

function Profile() {
  const titleContainer = 'pt-[100px]';

  return (
    <>
      <div className={`${titleContainer}`}>
        <h3 className="text-gold-dark text-2xl">Profil</h3>
      </div>
    </>
  );
}

export default Profile;