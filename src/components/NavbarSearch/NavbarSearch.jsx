import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useHistory } from 'react-router';

function NavbarSearch() {
  const [search, setSearch] = useState('');
  const history = useHistory();
  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
    setSearch('');
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
