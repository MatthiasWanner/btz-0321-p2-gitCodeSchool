import React, { useEffect, useState } from 'react';
import './Repo.css';
import { useParams } from 'react-router-dom';
import { useGetOne } from '../../api/useGet';
import axios from 'axios';
import API_URL from '../../api/api';
import { ONE_REPO_URL } from '../../api/endpoints';
import Files from './Files';
import ContentOverview from './ContentOverview';



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
      })
      .catch(console.error);
  }, []);


  const [fileEndPoint, setfileEndpoint] = useState(`${endpoint}/contents/README.md`)
    
  const handleClickFile = (string)=>{
      setfileEndpoint(string);
  }

  const handleClickDir = ()=>{
    console.log("c'est un repo")
}

  return (
    <div className="">
      <h3 className="text-yellow-500">Name repo {data.name}</h3>
      <p className="text-green-500">Description {data.description}</p>
      <p className="text-blue-600">languages du projet {data.language}</p>
      <Files endpoint={endpoint} handleClickFile={handleClickFile} handleClickDir={handleClickDir} />
      <ContentOverview fileEndPoint={fileEndPoint} />
    </div>
  );
}

export default Repo;
