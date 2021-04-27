import React from 'react';
import './Profile.css';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import { useParams } from 'react-router';
import RepoMap from './RepoMap';

import Follow from './Follow'
import {useGetOne} from '../../api/useGet' 

function Profile() {
  const titleContainer = 'pt-[100px]';

  const { pseudo } = useParams();
  const endpoint = PROFIL_URL.replace('{username}', pseudo);


  const profile= useGetOne(endpoint)
  console.log(profile)

  return (
    <>
      <div className={`${titleContainer}`}>
        <h3 className="text-gold-dark text-2xl">Profil de {pseudo}</h3>
      </div>

      <div className="boxImgProfil" className="">
        <img className="avatar" src={profile.datas.avatar_url} className="w-64 rounded-full"/>
        <div className="boxInfoProfil" className="text-white mt-4 w-52 ml-6">
          <div>
          <h3 className="text-center">{profile.datas.login}</h3>
          </div>
          <div className="flex space-x-8">
          <p>Followers: {profile.datas.followers}</p>
          <p>Following: {profile.datas.following}</p>
          </div>
        </div>
        <Follow pseudo={pseudo}/>
        <RepoMap />


        <div></div>
      </div>
    </>
  );
}

export default Profile;
