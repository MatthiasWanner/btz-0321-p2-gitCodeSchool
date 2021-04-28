import React from 'react';
import './Profile.css';
import { PROFIL_URL } from '../../api/endpoints';
import { useParams } from 'react-router';
import Follow from './Follow';
import { useGetOne } from '../../api/useGet';
import RepoMap from './RepoMap';

function Profile() {
  const titleContainer = 'pt-[100px]';

  const { pseudo } = useParams();
  const endpoint = PROFIL_URL.replace('{username}', pseudo);

  const profile = useGetOne(endpoint);

  return (
    <>
      <div className={`${titleContainer}`}>
        <h3 className="text-gold-dark text-2xl">{pseudo}</h3>
      </div>

      <div className="boxImgProfil w-full">
        <img className="avatar lg:w-64 lg:ml-10 rounded-full " src={profile.datas.avatar_url} />
        <div className="boxInfoProfil text-white mt-4 w-52 ml-6">
          <div className="flex w-56 space-x-8 ml-8">
            <p className="w-32">Followers: {profile.datas.followers}</p>
            <p className="w-32">Following: {profile.datas.following}</p>
          </div>
        </div>
        <Follow pseudo={pseudo} />

        <RepoMap />
      </div>
    </>
  );
}

export default Profile;
