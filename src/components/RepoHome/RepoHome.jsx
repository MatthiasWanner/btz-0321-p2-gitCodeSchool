import React from 'react';
import PropTypes from 'prop-types';

import './RepoHome.css';
import star from '../../img/star.svg';

function RepoHome({ repo, isLogged }) {
  const profileRepoContainer = 'rounded-2xl h-24 w-full bg-repos-dark border mb-5 shadow-lg';

  const homeRepoContainer = 'flex p-2 bg-repos-dark w-9/10 mb-3 border border-black rounded-l-full rounded-r-2xl';
  const avatarClasses = 'flex justify-center items-center w-1/4 rounded-full overflow-hidden';
  const infosContainerClasses = 'w-4/5 pl-2';
  const repoTitleClasses = 'text-xl font-semibold';
  const buttonRepoClasses = 'text-white rounded w-1/4 border-b-4 border-l-2 shadow-lg bg-gold-dark border-gold-hover hover:bg-gold-hover';

  if (isLogged) {
    return (
      <div className={`${profileRepoContainer}`} id={repo.id}>
        <div className="h-2/3 text-black">
          <h2 className="text-l text-center font-semibold">{repo.name}</h2>
          <p className="font-light">{repo.description}</p>
        </div>
        <div className="flex w-full justify-center">
          <button className={`${buttonRepoClasses}`}>Voir</button>
        </div>
      </div>
    );
  }

  if (!isLogged) {
    return (
      <div className={`${homeRepoContainer}`}>
        <div className={`${avatarClasses}`}>
          <img src={`${repo.owner.avatar_url}`} alt={`${repo.owner.login} avatar`} />
        </div>
        <div className={`${infosContainerClasses}`}>
          <h3 className={`${repoTitleClasses}`}>{repo.name}</h3>
          <p>de {repo.owner.login}</p>
          <p className="border-t text-right">
            {repo.stargazers_count} <img className="inline w-1/12" src={star} alt="star" />
          </p>
        </div>
      </div>
    );
  }
}

RepoHome.propTypes = {
  repo: PropTypes.object,
  isLogged: PropTypes.bool,
};

export default RepoHome;
