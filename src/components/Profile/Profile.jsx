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
        <h3 className="text-gold-dark text-4xl mt-16 mb-16 border-b border-gold-dark">{username}</h3>
      </div>

      <div className="boxImgProfil w-full flex justify-center items-center">
        <div className="md:mr-24"><hr className="md:w-52 md:border-gold-dark" /></div>
        <img className="avatar lg:w-64 w-48 rounded-full " src={profile.datas.avatar_url} alt={`${username} avatar`} />
       <div className="md:ml-24"><hr className="md:w-52 md:border-gold-dark"/></div>
        
      </div>
        <div className="flex  flex-col lg:flex-row mt-8">
          <div className="mr-4 ml-4 mt-4 text-white border border-gold-dark p-4 mt-6 rounded-xl">
            <p className="border-b 1px w-2/3 border-gold-dark">Followers: {profile.datas.followers}</p>
            <Follow username={username} />
          </div>
          <div className="mx-4 mt-4 text-white border border-gold-dark p-4 rounded-xl">
            <p className="border-b 1px w-2/3 border-gold-dark">Following: {profile.datas.following}</p>
            <Following username={username} />
          </div>
        </div>

        <RepoMap />
        <Link to={`/repos/${username}`}>
          <button className="w-32 h-16 rounded-xl my-12 bg-gold-dark ">Tous les repos</button>
        </Link>
        <div className="border 1px border-gold-dark w-3/4 mx-auto "></div>
      
    </>
  );
}

export default Profile;
