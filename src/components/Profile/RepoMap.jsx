import React from 'react';
import './Profile.css';
import { useGetAll } from '../../api/useGet';
import { PROFIL_REPOS } from '../../api/endpoints';
import { useParams } from 'react-router';
import { FolderIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

export default function RepoMap() {
  const { username } = useParams();
  const endpoint = PROFIL_REPOS.replace('{username}', username);
  const repoMap = useGetAll(endpoint);

  // class Tailwind
  const repoContainer = 'flex flex-col items-center justify-center border-gold-dark mx-4  text-center bg-homeGray-dark rounded-xl h-full';
  const repoContainerLG = 'md:my-4 md:w-1/2 md:p-4 md:h-56 md:w-full ';
  // fin de class

  if (repoMap.isLoading) {
    return <Spinner />;
  }
  if (!repoMap.isLoading) {
    return (
      <>
        <div className="border 1px border-gold-dark w-3/4 mx-auto mt-12"></div>
        <div className="text-white my-4 flex justify-start items-center w-full p-4 overflow-auto bg-black h-72">
          {repoMap.datas.map((repo) => {
            return (
              <div className="repo-container">
              <Link className= {`${repoContainer} ${repoContainerLG}`} key={repo.id} to={`/repo/${username}/${repo.name}`}>
                
                  <p className="w-full text-lg lg:h-16 lg:w-52 overflow-hidden overflow-ellipsis ">{repo.name}</p>
                  <div className="text-gold-dark flex justify-center items-center">
                    <FolderIcon className="h-32 w-32 content-center" />
                  </div>
                  <p className="lg:text-lg lg:block lg:overflow-hidden hidden lg:h-16">{repo.description}</p>
               
              </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
