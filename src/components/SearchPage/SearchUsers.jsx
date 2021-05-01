/* eslint-disable jsx-a11y/no-onchange */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import DropDown from '../DropDown/DropDown';
import PropTypes from 'prop-types';
import { SEARCH_USERS_URL } from '../../api/endpoints';
import { useSearch } from '../../api/useSearch';

function SearchUsers({ query }) {
  const [activePage, setActivePage] = useState('1');
  const [endpoint, setEndpoint] = useState('');
  useEffect(() => {
    setEndpoint(SEARCH_USERS_URL.replace('{query}', query).replace('{page}', activePage));
  }, [activePage]);
  const result = useSearch(endpoint);
  const [totalPages, setTotalPages] = useState(0);
  const [pagination, setPagination] = useState([]);
  useEffect(() => {
    const pages = Math.ceil(result.datas.total_count / 30) > 10 ? 10 : Math.ceil(result.datas.total_count / 30);
    setTotalPages(pages);
  }, [result]);
  useEffect(() => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(`${i}`);
    }
    setPagination(pagination);
  }, [totalPages]);

  const handleChangePage = (value) => {
    setActivePage(value);
  };

  const searchResultsContainer = 'w-full flex flex-col items-start my-5 border-t border-gold-dark';

  if (result.datas.isLoading) {
    return <Spinner />;
  } else if (result.datas.total_count > 0) {
    return (
      <div className={`users-results ${searchResultsContainer}`}>
        <p className={`w-full flex mb-2 text-lg underline`}>
          {result.datas.total_count} {result.datas.total_count === 1 ? 'utilisateur trouvé ' : 'utilisateurs trouvés '}
          <span role="img" aria-label="yeah">
            🤗
          </span>
        </p>
        <div className="flex w-full justify-center">
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
        {result.datas.items.map((item) => {
          return (
            <Link key={item.login} to={`/profile/${item.login}`}>
              <p>{item.login}</p>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return (
      <p className="text-left mt-5 border-t border-gold-dark">
        Aucun utilisateur trouvé{' '}
        <span role="img" aria-label="oups">
          😱
        </span>
      </p>
    );
  }
}

SearchUsers.propTypes = {
  query: PropTypes.string,
};
export default SearchUsers;
