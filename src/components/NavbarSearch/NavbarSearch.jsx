import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

function NavbarSearch() {
  const [user, setUser] = useState('');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/profile/${user}`);
    setUser('');
  }

  return (
    <div className="px-[40px] sm:px-0 flex items-center">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Search"
          className="w-full h-6 mr-6 sm:mr-2 pl-3 rounded-full outline-none focus:ring focus:ring-black"
        />
        <button type="submit">
          <SearchIcon className="h-8" />
        </button>
      </form>
    </div>
  );
}

export default NavbarSearch;

