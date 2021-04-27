import { FolderIcon, StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { useParams } from 'react-router';
import { PROFIL_REPOS } from '../../api/endpoints';
import { useGetAll } from '../../api/useGet';

export default function AllRepos() {
  const { username } = useParams();
  const endpoint = PROFIL_REPOS.replace(`{username}`, username);

  const allRepos = useGetAll(endpoint);

  const repoContainer = 'border-gold-dark my-4 w-3/12 p-4 mx-4 rounded-md text-center bg-homeGray-dark';
  const repoContainerMD = '';

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-white mt-[60px]"> {username} Repositories </h1>
        <p className="text-white">
          Language
          <select name="language" id="language-selection" className="text-gray-900">
            <option value="">--Please choose an language-</option>
            <option value="">Select All</option>
            <option value="">Javascript</option>
            <option value="">HTML</option>
          </select>
        </p>
      </div>
      {allRepos.datas.map((repos) => {
        return (
          <div key={repos.id} className="border border-yellow-500 mx-10 mb-5">
            <div className="text-gold-dark flex justify-between pl-2 items-center">
              <FolderIcon className="h-10 w-10" />
              <p className="text-white">{repos.name}</p>
              <StarIcon className="h-5 w-5" />
              <p className="text-white">{repos.stargazers_count}</p>
            </div>

            <p className="text-white">Description:{repos.description}</p>
            <p className="text-white">{repos.language}</p>
          </div>
        );
      })}
    </div>
  );
}
