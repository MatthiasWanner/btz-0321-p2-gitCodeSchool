import { FolderIcon, StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { PROFIL_REPOS } from '../../api/endpoints';
import { useGetAll } from '../../api/useGet';
import './AllRepos.css';

export default function AllRepos() {
  const { username } = useParams();
  const endpoint = PROFIL_REPOS.replace(`{username}`, username);

  const allRepos = useGetAll(endpoint);

  const haveTheColor = (language) => {
    switch (language) {
      case 'JavaScript':
        return 'bg-yellow-200';
      case 'HTML':
        return 'bg-red-700';
      case 'CSS':
        return 'bg-purple-700';
      case 'Vue':
        return 'bg-green-900';
      case 'PHP':
        return 'bg-blue-900';
      default:
        return 'bg-green-200';
    }
  };

  return (
    <div>
      <div className="mb-5 ">
        <h1 className="text-white flex justify-center px-5 text-lg mb-6  "> Les Repos de {username} </h1>
        <div className="flex justify-around">
          <p className="text-white">Language</p>
          <select name="language" id="language-selection" className="text-gray-900 border rounded-full">
            <option value="">--Please choose an language-</option>
            <option value="">Select All</option>
            <option value="">Javascript</option>
            <option value="">HTML</option>
          </select>
        </div>
      </div>
      {allRepos.datas.map((repo) => {
        return (
          <Link key={repo.id} to={`/repo/${username}/${repo.name}`}>
            <div className="border-2 border-yellow-600 bg-gold-dark hover:bg-gold-hover rounded-md mx-8 mb-5">
              <div className="text-white flex pl-6 pt-2 items-center justify-between mb-5">
                <FolderIcon className="h-10 w-10" />
                <p className="text-white text-lg pt-2">{repo.name}</p>
                <div className="flex justify-between items-center mr-4">
                  <p className="text-white">{repo.stargazers_count}</p>
                  <StarIcon className="h-5 w-5" />
                </div>
              </div>

              <h1 className="text-white mb-2 pl-6">Description</h1>
              <p className="text-white mb-2 pl-6 pr-4">{repo.description}</p>
              <p className="flex justify-end items-center text-white mb-2 mx-6">
                <span className={`${haveTheColor(repo.language)} w-4 h-4 rounded-full mx-3`} />
                {repo.language}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
