import React, { useEffect, useState } from 'react';
import './Profile.css';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import axios from 'axios';
import { useParams } from 'react-router';

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
  }, []);

  return (
    <div className="border 2px border-red-500 text-white">
      <h1>Affichage des repos</h1>
      <div>
        {repoMap.map((repo) => {
          return (
            <div className="border 2px border-red-600 ">
              <p>{repo.name}</p>
              <p>DESCRIPTION :{repo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
