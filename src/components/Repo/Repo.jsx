import React, { useEffect, useState } from 'react';
import './Repo.css';
import { useParams } from 'react-router-dom';
import { useGetOne } from '../../api/useGet';
import axios from 'axios';
import API_URL from '../../api/api';
import { ONE_REPO_URL } from '../../api/endpoints';

function Repo() {
  const { username, repo } = useParams();
  const endpoint = ONE_REPO_URL.replace('{user}', username).replace('{repo}', repo);
  const [data, setData] = useState('');
  console.log(endpoint);

  useEffect(() => {
    axios
      .get(`${API_URL}${endpoint}`)
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="">
      <h3 className="text-yellow-500">Name repo {data.name}</h3>
      <p className="text-green-500">Description {data.description}</p>
      <p className="text-blue-600">languages du projet {data.language}</p>
    </div>
  );
}

export default Repo;
