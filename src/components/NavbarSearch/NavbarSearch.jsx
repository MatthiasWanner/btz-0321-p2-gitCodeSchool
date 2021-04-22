import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import { useParams } from 'react-router';
import axios from 'axios';

function NavbarSearch() {
  const [user, setUser] = useState('');
  const { username } = useParams('');
  const [search, setSearch] = useState('');
  const endpoint = PROFIL_URL.replace('{username}', username);

  function handleSubmit(e) {
    e.preventDefault();
    setUser(user);
  }

  useEffect(() => {
    axios
      .get(`${API_URL}${endpoint}`)
      .then((res) => {
        setSearch(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="px-[40px] sm:px-0 flex items-center">
      <form action="" onClick={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          value={search}
          className="w-full h-6 mr-6 sm:mr-2 pl-3 rounded-full outline-none focus:ring focus:ring-black"
        />
        <button>
          <SearchIcon className="h-8" />
        </button>
      </form>
    </div>
  );
}

export default NavbarSearch;
