import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../Contexts';
import { useParams } from 'react-router';
import NavbarSearch from '../NavbarSearch/NavbarSearch';
import SearchRepos from './SearchRepos';
import SearchUsers from './SearchUsers';

function SearchPage() {
  const { query } = useParams();
  const { setModal, setModalOpen } = useContext(ModalContext);
  const [resultsRepos, setResultsRepos] = useState(0);
  const [resultsUsers, setResultsUsers] = useState(0);
  const [activePageRepos, setActivePageRepos] = useState(1);
  const [activePageUsers, setActivePageUsers] = useState(1);
  useEffect(() => {
    setModalOpen(false);
    if ((resultsRepos > 300 || resultsUsers > 300) && activePageRepos === 1 && activePageUsers === 1) {
      const totalResults = resultsUsers + resultsRepos;
      setModal({
        title: 'Wow 🤯',
        content: `Il y a ${totalResults} résultats 😵‍💫 ! Nous vous proposons les 300 premiers dans chaque catégorie. Pour plus de précision, ajoutez des critères`,
        buttons: [
          {
            content: 'Je comprends',
            color: 'bg-green-300 hover:bg-green-600',
          },
        ],
      });
      setModalOpen(true);
    }
  }, [resultsRepos, resultsUsers]);

  const handleSetRepos = (reposResults, active) => {
    setResultsRepos(reposResults);
    setActivePageRepos(active);
  };

  const handleSetUsers = (usersResults, active) => {
    setResultsUsers(usersResults);
    setActivePageUsers(active);
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
          <SearchUsers query={query} handleSetUsers={handleSetUsers} />
          <SearchRepos query={query} handleSetRepos={handleSetRepos} />
        </div>
      </div>
    </>
  );
}

export default SearchPage;
