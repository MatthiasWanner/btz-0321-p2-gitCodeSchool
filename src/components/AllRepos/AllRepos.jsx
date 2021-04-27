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
          <select name="language" id="language-selection" className="text-gray-900 border rounded-full">
            <option value="">--Please choose an language-</option>
            <option value="">Select All</option>
            <option value="">Javascript</option>
            <option value="">HTML</option>
          </select>
        </p>
      </div>
      {allRepos.datas.map((repos) => {
        return (
          <div key={repos.id} className="border-2 border-yellow-600 rounded-md mx-8 mb-5 hover:bg-yellow-600 bg-opacity-20">
            <div className="text-gold-dark flex pl-2 items-center justify-between mb-5">
              <FolderIcon className="h-10 w-10" />
              <p className="text-white text-lg">{repos.name}</p>
              <div className="flex justify-between items-center mr-2">
                <p className="text-white">{repos.stargazers_count}</p>
                <StarIcon className="h-5 w-5" />
              </div>
            </div>

            <h1 className="text-white mb-2">Description</h1>
            <p className="text-white mb-2">{repos.description}</p>
            <p className="flex justify-end text-gold-light mr-5 mb-2">{repos.language}</p>
          </div>
        );
      })}
    </div>
  );
}
