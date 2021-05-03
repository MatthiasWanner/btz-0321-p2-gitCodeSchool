/* eslint-disable jsx-a11y/no-onchange */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import DropDown from '../DropDown/DropDown';
import PropTypes from 'prop-types';
import { SEARCH_REPOS_URL } from '../../api/endpoints';
import { useSearch } from '../../api/useSearch';

function SearchRepos({ query, handleCalculateResults }) {
  const [activePage, setActivePage] = useState('1');
  useEffect(() => {
    setActivePage('1');
  }, [query]);

  const [endpoint, setEndpoint] = useState(SEARCH_REPOS_URL.replace('{query}', query).replace('{page}', activePage));
  useEffect(() => {
    setEndpoint(SEARCH_REPOS_URL.replace('{query}', query).replace('{page}', activePage));
  }, [activePage, query]);

  const result = useSearch(endpoint);
  const [totalPages, setTotalPages] = useState(0);
  const [pagination, setPagination] = useState([]);
  useEffect(() => {
    handleCalculateResults(result.datas.total_count);
    const pages = Math.ceil(result.datas.total_count / 30) > 10 ? 10 : Math.ceil(result.datas.total_count / 30);
    setTotalPages(pages);
  }, [result]);

  useEffect(() => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(i);
    }
    setPagination(pagination);
  }, [totalPages]);

  const handleChangePage = (value) => {
    setActivePage(value);
  };

  const searchResultsContainer = 'w-full flex flex-col items-start my-5 border-t border-gold-dark';
  const searchResultsContainerMd = '';

  if (result.datas.isLoading) {
    return <Spinner />;
  } else if (result.datas.total_count > 0) {
    return (
      <div className={`repos-results ${searchResultsContainer} ${searchResultsContainerMd}`}>
        <p className="w-full flex mb-2 text-lg underline">
          {result.datas.total_count} {result.datas.total_count === 1 ? 'repo trouvé ' : 'repos trouvés '}
          <span role="img" aria-label="yeah">
            🤗
          </span>
        </p>
        {totalPages > 1 && (
          <div className="flex w-full justify-center my-4">
            <DropDown
              className="p-1"
              params={{
                text: 'Page',
                color: 'orange',
                items: pagination,
                onClick: (action) => handleChangePage(action),
              }}
            />
          </div>
        )}
        <p className="w-full text-center text-white"></p>
        {result.datas.items.map((item) => {
          return (
            <Link className="w-full" key={item.full_name} to={`/repo/${item.owner.login}/${item.name}`}>
              <p className="flex w-full text-lg truncate">
                {item.name} par {item.owner.login}
              </p>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={`repos-results ${searchResultsContainer} ${searchResultsContainerMd}`}>
        <p className="text-left mt-5">
          Aucun Repo trouvé{' '}
          <span role="img" aria-label="oups">
            😱
          </span>
        </p>
      </div>
    );
  }
}

SearchRepos.propTypes = {
  query: PropTypes.string,
  handleCalculateResults: PropTypes.func,
};
export default SearchRepos;
