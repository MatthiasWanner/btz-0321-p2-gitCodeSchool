import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import { SEARCH_REPOS_URL } from '../../api/endpoints';
import { useSearch } from '../../api/useSearch';

function SearchRepos({ query }) {
  const result = useSearch(SEARCH_REPOS_URL.replace('{query}', query));

  if (result.datas.isLoading) {
    return <Spinner />;
  } else if (result.datas.total_count > 0) {
    return (
      <div className="">
        <p>Nombre de résultats: {result.datas.total_count}</p>
        {result.datas.items.map((item) => {
          return (
            <Link key={item.full_name} to={`/repo/${item.owner.login}/${item.full_name}`}>
              <p>{item.full_name} par</p>
              <p></p>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return <p>Aucun utilisateur trouvé</p>;
  }
}

SearchRepos.propTypes = {
  query: PropTypes.string,
};
export default SearchRepos;
