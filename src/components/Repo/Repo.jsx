import React, { useEffect } from 'react';
import './Repo.css';
import { useParams } from 'react-router-dom';
import { useGetOne } from '../../api/useGet';
import axios from 'axios';
import API_URL from '../../api/api';
import { ONE_REPO_URL } from '../../api/endpoints';

function Repo() {
  const { username, repo } = useParams();
  const endpoint = ONE_REPO_URL.replace('{user}', username).replace('{repo}', repo);
  console.log(endpoint);

  useEffect(() => {
    axios.get(`${API_URL}${endpoint}`);
  }, []);

  return (
    <>
      <h3 className="text-yellow-500">
        {repo} De {username}
      </h3>
    </>
  );
}

export default Repo;
