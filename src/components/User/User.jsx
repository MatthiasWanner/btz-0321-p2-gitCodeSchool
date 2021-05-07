import React from 'react';
import { useGetOne } from '../../api/useGet';
import { PROFIL_URL } from '../../api/endpoints';

export default function User({ user, handleClickChat }) {
  const info = useGetOne(PROFIL_URL.replace('{username}', user));

  return (
    <div className="flex p-2 my-4 flex items-center">
      <img src={info.datas.avatar_url} alt="user avatar" className="bg-green-200 rounded-full h-6 w-6 flex-shrink-0" />
      <button className="w-full focus:outline-none flex justify-start pl-4" onClick={() => handleClickChat(user, info.datas.avatar_url)}>
        {user}
      </button>
      <div className="bg-green-online rounded-full h-2 w-2 flex-shrink-0" />
    </div>
  );
}
