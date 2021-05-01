import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import { SEARCH_USERS_URL } from '../../api/endpoints';
import { useSearch } from '../../api/useSearch';

function SearchUsers({ query }) {
  const result = useSearch(SEARCH_USERS_URL.replace('{query}', query));

  if (result.datas.isLoading) {
    return <Spinner />;
  } else if (result.datas.total_count > 0) {
    return (
      <div className={`users-results`}>
        <p>
          {`Nombre d'utilisateurs:`}
          {result.datas.total_count}
        </p>
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
    return <p>Aucun utilisateur trouvé</p>;
  }
}

SearchUsers.propTypes = {
  query: PropTypes.string,
};
export default SearchUsers;
