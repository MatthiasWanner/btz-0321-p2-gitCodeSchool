import React, { useState, useContext } from 'react';
import { ModalContext } from '../Contexts';
import { SearchIcon } from '@heroicons/react/solid';
import { useHistory } from 'react-router';

function NavbarSearch() {
  const { setModal, setModalOpen } = useContext(ModalContext);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length < 4) {
      setModal({
        title: '',
        content: `Veuillez saisir plus de caractères (4 au minimum). Le nombre de résultats risque d'être trop important 😵‍💫`,
        buttons: [
          {
            content: 'Je comprends',
            color: 'bg-green-300 hover:bg-green-600',
          },
        ],
      });
      setModalOpen(true);
    } else {
      history.push(`/search/${search}`);
      setSearch('');
    }
  };

  return (
    <div className="sm:px-0 flex items-center justify-center">
      <form className="flex items-center" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleChangeInput}
          placeholder="Search"
          className="w-full h-6 mr-6 sm:mr-2 pl-3 rounded-full outline-none focus:ring focus:ring-gold-dark"
        />
        <button type="submit">
          <SearchIcon className="h-8" />
        </button>
      </form>
    </div>
  );
}
export default NavbarSearch;
