import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import { useParams } from 'react-router';
import axios from 'axios';

function NavbarSearch() {
  const [user, setUser] = useState();
  const [search, setSearch] = useState();
  const { username } = useParams();
  const endpointSearch = PROFIL_URL.replace('{user}', username);

  console.log(endpointSearch);

  useEffect(() => {
    axios
      .get(`${API_URL}${endpointSearch}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="px-[40px] sm:px-0 flex items-center">
      <input type="text" placeholder="Search" className="w-full h-6 mr-6 sm:mr-2 pl-3 rounded-full outline-none focus:ring focus:ring-black" />
      <SearchIcon className="h-8" />
    </div>
  );
}

export default NavbarSearch;
