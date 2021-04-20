import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import star from '../../img/star.svg';

function RepoHome({ isLogged, result }) {
  const homeRepoContainer = 'flex p-2 bg-repos-dark w-9/10 mb-3 border border-black rounded-l-full rounded-r-2xl';
  const avatarClasses = 'flex justify-center items-center w-1/4 rounded-full overflow-hidden';
  const infosContainerClasses = 'w-4/5 pl-2';
  const repoTitleClasses = 'text-xl font-semibold';
  if (!isLogged) {
    return (
      <Link to={`/repos/${result.owner.login}/${result.name}`}>
        <div className={`${homeRepoContainer}`}>
          <div className={`${avatarClasses}`}>
            <img src={`${result.owner.avatar_url}`} alt={`${result.owner.login} avatar`} />
          </div>
          <div className={`${infosContainerClasses}`}>
            <h3 className={`${repoTitleClasses}`}>{result.name}</h3>
            <p>de {result.owner.login}</p>
            <p className="border-t text-right">
              {result.stargazers_count} <img className="inline w-1/12" src={star} alt="star" />
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

RepoHome.propTypes = {
  result: PropTypes.object,
  isLogged: PropTypes.bool,
};

export default RepoHome;
