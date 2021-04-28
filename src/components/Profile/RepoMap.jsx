import React, { useEffect, useState } from 'react';
import './Profile.css';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import axios from 'axios';
import { useParams } from 'react-router';
import { FolderIcon } from '@heroicons/react/solid';

export default function RepoMap() {
  const [repoMap, setRepoMap] = useState([]);
  const { pseudo } = useParams();
  const endpoint = PROFIL_URL.replace('{username}', pseudo);

  useEffect(() => {
    axios
      .get(`${API_URL}${endpoint}/repos`)
      .then((res) => {
        setRepoMap(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pseudo]);

  // class Tailwind
  const repoContainer = 'flex flex-col items-center border-gold-dark mx-4 w-3/4 text-center bg-homeGray-dark rounded-xl';
  const repoContainerLG = 'lg:my-4 lg:w-3/12 lg:p-4 lg:mx-4 lg:h-72';
  // fin de class

  return (
    <>
      <div className="border 1px border-gold-dark w-3/4 mx-auto mt-12"></div>
      <div className="text-white my-4 flex justify-start w-full p-4 overflow-auto bg-black h-72">
        {repoMap.map((repo) => {
          return (
            <div key={repo.id} className={`repo-container ${repoContainer} ${repoContainerLG}`}>
              <p className="w-full lg:text-lg lg:h-16 lg:w-52 overflow-hidden overflow-ellipsis h-5">{repo.name}</p>
              <div className="text-gold-dark flex justify-center items-center">
                <FolderIcon className="h-32 w-32 content-center" />
              </div>
              <p className="lg:text-lg lg:block lg:overflow-hidden hidden lg:h-16">{repo.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
