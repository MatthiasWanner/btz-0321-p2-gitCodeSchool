/* eslint-disable jsx-a11y/no-onchange */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import DropDown from '../DropDown/DropDown';
import PropTypes from 'prop-types';
import { SEARCH_USERS_URL } from '../../api/endpoints';
import { useSearch } from '../../api/useSearch';
import { usePagination } from '../../hooks/usePagination';

function SearchUsers({ query, handleSetUsers }) {
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    setActivePage(1);
  }, [query]);
  const [endpoint, setEndpoint] = useState(SEARCH_USERS_URL.replace('{query}', query).replace('{page}', activePage));
  useEffect(() => {
    setEndpoint(SEARCH_USERS_URL.replace('{query}', query).replace('{page}', activePage));
  }, [activePage, query]);

  const result = useSearch(endpoint);
  const pagination = usePagination(result.datas.total_count);
  useEffect(() => {
    if (!result.isLoading) {
      handleSetUsers(result.datas.total_count, activePage);
    }
  }, [result]);

  const handleChangePage = (value) => {
    setActivePage(value);
  };

  const searchResultsContainer = 'w-full h-full flex flex-col items-start my-5 border-t border-gold-dark';
  const searchResultsContainerMd = '';

  if (result.datas.isLoading) {
    return <Spinner />;
  } else if (result.datas.total_count > 0) {
    return (
      <div className={`users-results ${searchResultsContainer} ${searchResultsContainerMd}`}>
        <p className={`w-full flex my-4 text-lg underline`}>
          {result.datas.total_count} {result.datas.total_count === 1 ? 'utilisateur trouvé ' : 'utilisateurs trouvés '}
          <span role="img" aria-label="yeah">
            🤗
          </span>
        </p>

        {result.datas.items.map((item) => {
          return (
            <Link key={item.login} to={`/profile/${item.login}`}>
              <p>{item.login}</p>
            </Link>
          );
        })}
        {pagination.length > 1 && (
          <div className="flex w-full h-full justify-center items-end mb-10 border-gold-dark">
            <DropDown
              className="p-1"
              params={{
                active: activePage,
                text: 'Page',
                color: 'gold-dark',
                items: pagination,
                onClick: (action) => handleChangePage(action),
              }}
            />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={`users-results ${searchResultsContainer} ${searchResultsContainerMd}`}>
        <p className="text-left mt-5">
          Aucun utilisateur trouvé{' '}
          <span role="img" aria-label="oups">
            😱
          </span>
        </p>
      </div>
    );
  }
}

SearchUsers.propTypes = {
  query: PropTypes.string,
  handleCalculateResults: PropTypes.func,
};
export default SearchUsers;
