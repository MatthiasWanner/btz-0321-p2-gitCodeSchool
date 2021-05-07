import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HomePopularElement.css';
import star from '../../img/star.svg';

function HomePopularElement({ result, index }) {
  const linkContainer = 'md:w-1/2 pb-5 md:flex';
  const homeRepoContainer = 'flex text-white items-center p-2 bg-homeGray-dark hover:bg-gold-hover border border-gold-dark rounded-popular md:w-96';
  const infosContainerClasses = 'w-4/5 pl-2 overflow-hidden';
  const repoTitleClasses = 'text-xl text-gold-dark font-semibold whitespace-nowrap';

  const haveBorderSide = (number) => {
    if (number % 2 !== 0) {
      return 'md:border-l md:justify-start border-gold-dark';
    } else {
      return 'md:border-r md:justify-end border-gold-dark';
    }
  };

  return (
    <Link to={`/repo/${result.owner.login}/${result.name}`} style={{ marginRight: 1 }} className={`${linkContainer} ${haveBorderSide(index)}`}>
      <div className={`${homeRepoContainer}`}>
        <img src={`${result.owner.avatar_url}`} alt={`${result.owner.login} avatar`} className="h-20 rounded-full" />
        <div className={`${infosContainerClasses}`}>
          <h3 className={`${repoTitleClasses}`}>{result.name}</h3>
          <p>de {result.owner.login}</p>
          <p className="border-t border-gold-dark text-right">
            {result.stargazers_count} <img className="inline w-1/12" src={star} alt="star" />
          </p>
        </div>
      </div>
    </Link>
  );
}

HomePopularElement.propTypes = {
  result: PropTypes.object,
  index: PropTypes.number,
};

export default HomePopularElement;
