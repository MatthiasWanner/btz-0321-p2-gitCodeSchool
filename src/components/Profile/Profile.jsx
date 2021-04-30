import React from 'react';
import './Profile.css';
import { PROFIL_URL } from '../../api/endpoints';
import { useParams } from 'react-router';
import Follow from './Follow';
import { useGetOne } from '../../api/useGet';
import RepoMap from './RepoMap';
import Following from './Following';
import { Link } from 'react-router-dom';

function Profile() {
  const titleContainer = 'mt-14';

  const { username } = useParams();
  const endpoint = PROFIL_URL.replace('{username}', username);

  const profile = useGetOne(endpoint);

  return (
    <>
      <div className={`${titleContainer}`}>
        <h3 className="text-gold-dark text-2xl mb-8">{username}</h3>
      </div>

      <div className="boxImgProfil w-full flex flex-col justify-center items-center">
        <img className="avatar lg:w-64 w-48 rounded-full mb-6 " src={profile.datas.avatar_url} alt={`${username} avatar`} />
        <div className="flex  flex-col lg:flex-row mt-8">
          <div className="mr-4 ml-4 mt-4 text-white border border-gold-dark p-4">
            <p className="border-b 1px w-2/3 border-gold-dark">Followers: {profile.datas.followers}</p>
            <Follow username={username} />
          </div>
          <div className="mx-4 mt-4 text-white border border-gold-dark p-4">
            <p className="border-b 1px w-2/3 border-gold-dark">Following: {profile.datas.following}</p>
            <Following username={username} />
          </div>
        </div>

        <RepoMap />
        <Link to={`/repos/${username}`}>
          <button className="w-32 h-16 rounded-xl mt-6 bg-gold-dark ">Tous les repos</button>
        </Link>
        <div className="border 1px border-gold-dark w-3/4 mx-auto mt-12"></div>
      </div>
    </>
  );
}

export default Profile;
