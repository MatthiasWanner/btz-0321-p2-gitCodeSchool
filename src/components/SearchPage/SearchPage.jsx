import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../Contexts';
import { useParams } from 'react-router';
import NavbarSearch from '../NavbarSearch/NavbarSearch';
import SearchRepos from './SearchRepos';
import SearchUsers from './SearchUsers';

function SearchPage() {
  const { query } = useParams();
  const [nbResult, setNbResult] = useState(0);
  const { setModal, setModalOpen } = useContext(ModalContext);
  useEffect(() => {
    setModal({
      title: '',
      content: `Il y a ${nbResult} 😵‍💫! Nous vous proposons les 300 premiers dans chaque catégorie. Pour plus de précision, ajoutez des critères`,
      buttons: [
        {
          content: 'Je comprends',
          color: 'bg-green-300 hover:bg-green-600',
        },
      ],
    });
    if (nbResult > 300) {
      handleWarnResults();
    }
  }, [nbResult]);

  const handleWarnResults = () => {
    setModalOpen(true);
  };

  const handleCalculateResults = (results) => {
    setNbResult(results);
  };

  const PageContainerClasses = 'flex flex-col mt-14 w-full text-center text-gold-dark px-5';
  const PageContainerClassesMd = '';
  const titleClasses = 'text-2xl';
  const subTitleClasses = 'text-xl mb-10';
  const searchResultsClasses = 'flex flex-col';
  const searchResultsClassesMd = 'md:flex-row';

  return (
    <>
      <div className={`search-page ${PageContainerClasses} ${PageContainerClassesMd}`}>
        <h3 className={`${titleClasses}`}>Resultat de la recherche</h3>
        <h2 className={`${subTitleClasses}`}>{`"${query}"`}</h2>
        <NavbarSearch />
        <div className={`search-results ${searchResultsClasses} ${searchResultsClassesMd}`}>
          <SearchUsers query={query} handleCalculateResults={handleCalculateResults} />
          <SearchRepos query={query} handleCalculateResults={handleCalculateResults} />
        </div>
      </div>
    </>
  );
}

export default SearchPage;
