import React from 'react';
import { useParams } from 'react-router';
import NavbarSearch from '../NavbarSearch/NavbarSearch';
import SearchRepos from './SearchRepos';
import SearchUsers from './SearchUsers';

function SearchPage() {
  const { query } = useParams();

  const PageContainerClasses = 'mt-14 w-full text-center text-gold-dark px-5';
  const titleClasses = 'text-2xl';
  const subTitleClasses = 'text-xl mb-10';

  return (
    <div className={`search-page ${PageContainerClasses}`}>
      <h3 className={`${titleClasses}`}>Resultat de la recherche</h3>
      <h2 className={`${subTitleClasses}`}>{`"${query}"`}</h2>
      <NavbarSearch />
      <SearchUsers query={query} />
      <SearchRepos query={query} />
    </div>
  );
}

export default SearchPage;
