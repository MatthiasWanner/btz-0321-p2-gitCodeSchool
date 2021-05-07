import React, { useState } from 'react';
import './Repo.css';
import { useParams } from 'react-router-dom';
import { useGetOne } from '../../api/useGet';
import { ONE_REPO_URL, CONTENT_REPO_URL, README_URL } from '../../api/endpoints';
import Files from './Files';
import ContentOverview from './ContentOverview';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

function Repo() {
  const { username, repo } = useParams();
  const repoEndpoint = ONE_REPO_URL.replace('{user}', username).replace('{repo}', repo);
  const [filesEndpoint, setFilesEndpoint] = useState(CONTENT_REPO_URL.replace('{user}', username).replace('{repo}', repo));
  const [fileEndPoint, setFileEndpoint] = useState(README_URL.replace('{user}', username).replace('{repo}', repo));
  const repoConsulted = useGetOne(repoEndpoint);
  const [directory, setDirectory] = useState('../');

  const handleClickFile = (type, fileName) => {
    if (type === 'file') {
      setFileEndpoint(`${filesEndpoint}/${fileName}`);
    } else if (type === 'dir') {
      setFilesEndpoint(`${filesEndpoint}/${fileName}`);
      setDirectory(`${fileName}/`);
    }
  };

  const handleClickPath = (endpoint) => {
    setFilesEndpoint(endpoint);
  };

  if (repoConsulted.isLoading) {
    return <Spinner />;
  }

  if (!repoConsulted.isLoading) {
    return (
      <>
        <div className="flex flex-col items-center w-full justify-end">
          <div className="flex flex-col items-center mb-6">
            <Link to={`/profile/${username}`}>
              <h1 className="text-gold-dark md:text-4xl text-2xl mt-24 border-b border-gold-dark">{username}</h1>
            </Link>
            <h3 className="text-gold-dark md:text-2xl text-xl mt-10">{repoConsulted.datas.name}</h3>
            <h3 className="text-gold-dark text-xl text-center mb-10 ">{repoConsulted.datas.description}</h3>
            <Link to={`/repos/${username}`}>
              <button className="justify-end bg-gold-dark hover:bg-homeGray-dark hover:text-gold-dark text-white font-bold py-3  px-4 mb-5 rounded-md mt-2">
                Tous les Repos
              </button>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center w-full md:mt-10 ">
            <Files
              filesEndpoint={filesEndpoint}
              handleClickFile={handleClickFile}
              handleClickPath={handleClickPath}
              directory={directory}
              className=""
            />
            <ContentOverview fileEndPoint={fileEndPoint} />
          </div>
        </div>
      </>
    );
  }
}

export default Repo;
