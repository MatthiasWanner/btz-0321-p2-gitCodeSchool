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

  // const filesOrFolder = (image) => {
  //   switch (image) {
  //     case `${}`:
  //       return 'bg-yellow-200';
  //     case `${}`:
  //       return 'bg-red-700';
  //     default:
  //       return 'bg-green-200';
  //   }
  // };

  const handleClickPath = (endpoint) => {
    setFilesEndpoint(endpoint);
  };

  const headerContainer = '';

  if (repoConsulted.isLoading) {
    return <Spinner />;
  }

  if (!repoConsulted.isLoading) {
    return (
      <>
        <div className="flex flex-col items-center  my-4 justify-end">
          <div className="flex  flex-col items-center mb-6">
            <h3 className="text-gold-dark text-3xl">{repoConsulted.datas.name}</h3>
            <Link to={`/profile/${username}`}>
              <p className="text-gold-dark text-l">Auteur: {username}</p>
            </Link>
            <p className="text-gold-dark">{repoConsulted.datas.description}</p>
          </div>
          <div className="md:flex md:flex-row items-start ">
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
