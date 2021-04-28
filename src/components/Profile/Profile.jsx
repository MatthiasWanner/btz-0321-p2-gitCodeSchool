import React from 'react';
import './Profile.css';
import { PROFIL_URL } from '../../api/endpoints';
import { useGetOne } from '../../api/useGet';
import { useParams } from 'react-router';
import RepoMap from './RepoMap';
import Follow from './Follow';

function Profile() {
  const titleContainer = 'pt-[100px]';
  const { username } = useParams();
  const endpoint = PROFIL_URL.replace('{username}', username);
  const profile = useGetOne(endpoint);

  return (
    <>
      <div className={`${titleContainer}`}>
        <h3 className="text-gold-dark text-2xl">Profil de {username}</h3>
      </div>

      <div className="boxImgProfil">
        <img className="avatar" src={profile.datas.avatar_url} alt={`${username} avatar`} />
        <div className="boxInfoProfil text-white">
          <h3>{profile.datas.login}</h3>
          <p>Followers: {profile.datas.followers}</p>
          <p>Following: {profile.datas.following}</p>
        </div>
        <Follow username={username} />
        <RepoMap />

        <div></div>
      </div>
    </>
  );
}

export default Profile;
