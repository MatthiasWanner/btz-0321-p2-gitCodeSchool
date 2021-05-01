import React from 'react';
import { useParams } from 'react-router';
import SearchRepos from './SearchRepos';
import SearchUsers from './SearchUsers';

function Search() {
  const { query } = useParams();

  return (
    <>
      <SearchUsers query={query} />
      <SearchRepos query={query} />
    </>
  );
}

export default Search;
