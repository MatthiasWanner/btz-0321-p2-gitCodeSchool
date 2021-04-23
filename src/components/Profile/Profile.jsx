import React, { useEffect, useState } from 'react';
import './Profile.css';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import { useParams } from 'react-router';
import RepoMap from './RepoMap';
import axios from 'axios';
import Follow from './Follow';
import AllReposProfile from './AllReposProfile';

function Profile() {
  const titleContainer = 'pt-[100px]';
  const [profile, setProfile] = useState('');
  const { pseudo } = useParams();
  const endpoint = PROFIL_URL.replace('{username}', pseudo);

  useEffect(() => {
    axios
      .get(`${API_URL}${endpoint}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pseudo]);

  return (
    <>
      <div className={`${titleContainer}`}>
        <h3 className="text-gold-dark text-2xl">Profil de {pseudo}</h3>
      </div>

      <div className="boxImgProfil">
        <img className="avatar" src={profile.avatar_url} />
        <div className="boxInfoProfil" className="text-white">
          <h3>{profile.login}</h3>
          <p>Followers: {profile.followers}</p>
          <p>Following: {profile.following}</p>
        </div>
        <AllReposProfile />
        <Follow pseudo={pseudo} />
        <RepoMap />

        <div></div>
      </div>
    </>
  );
}

export default Profile;
