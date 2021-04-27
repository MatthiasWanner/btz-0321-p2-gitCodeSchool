import React, { useEffect, useState } from 'react';
import './Profile.css';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import axios from 'axios';
import { useParams } from 'react-router';
import { FolderIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function RepoMap() {
  const [repoMap, setRepoMap] = useState([]);
  const { pseudo } = useParams();
  const endpoint = PROFIL_URL.replace('{username}', pseudo);

  useEffect(() => {
    axios
      .get(`${API_URL}${endpoint}/repos`)
      .then((res) => {
        setRepoMap(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pseudo]);

  // class Tailwind
  const repoContainer = 'border-gold-dark my-4 w-3/12 p-4 mx-4 rounded-md text-center bg-homeGray-dark';
  const repoContainerMD = '';
  // fin de class

  return (
    <>
      <Link to={`/repos/${pseudo}`}>
        <button className="text-white text-center my-4 border border-red-500">Affichage des repos</button>
      </Link>
      <div className="text-white my-4 flex flex-wrap justify-center border 2px border-gold-dark w-full p-4">
        {repoMap.map((repo) => {
          return (
            <div key={repo.id} className={`${repoContainer} ${repoContainerMD}`}>
              <p>Name: {repo.name}</p>
              <div className="text-gold-dark flex justify-center">
                <FolderIcon className="h-32 w-32" />
              </div>
              <p>Description :{repo.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
