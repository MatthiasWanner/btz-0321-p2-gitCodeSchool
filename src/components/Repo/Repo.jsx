import React, { useEffect, useState } from 'react';
import './Repo.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../api/api';
import { ONE_REPO_URL } from '../../api/endpoints';
import Files from './Files';
import ContentOverview from './ContentOverview';

function Repo() {
  const { username, repo } = useParams();
  const [repoEndpoint, setRepoEndpoint] = useState(ONE_REPO_URL.replace('{user}', username).replace('{repo}', repo));
  const [filesEndpoint, setFilesEndpoint] = useState(`${repoEndpoint}/contents`);
  const [fileEndPoint, setFileEndpoint] = useState(`${filesEndpoint}/README.md`);
  const [data, setData] = useState({});
  const [directory, setDirectory] = useState(`${repo}`);

  useEffect(() => {
    axios
      .get(`${API_URL}${repoEndpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(console.error);
  }, [repoEndpoint]);

  const handleClickFile = (type, fileName) => {
    if (type === 'file') {
      setFileEndpoint(`${filesEndpoint}/${fileName}`);
    } else if (type === 'dir') {
      setFilesEndpoint(`${filesEndpoint}/${fileName}`);
      setDirectory(`/${fileName}`);
    }
  };

  const handleClickPath = (endpoint) => {
    setFilesEndpoint(endpoint);
  };

  return (
    <div className="w-full">
      <h3 className="text-yellow-500">
        {data.name}
      </h3>
      <p className="text-green-500">{data.description}</p>
      <p className="text-blue-600">languages du projet : {data.language}</p>
      <p></p>
      <Files filesEndpoint={filesEndpoint} handleClickFile={handleClickFile} handleClickPath={handleClickPath} directory={directory} />
      <ContentOverview fileEndPoint={fileEndPoint} />
    </div>
  );
}

export default Repo;
