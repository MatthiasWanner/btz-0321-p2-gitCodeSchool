import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

function NavbarSearch() {
  return (
    <div className="px-[40px] sm:px-0 flex items-center">
      <input type="text" placeholder="Search" className="w-full h-6 mr-6 sm:mr-2 pl-3 rounded-full outline-none focus:ring focus:ring-black" />
      <SearchIcon className="h-8" />
    </div>
  );
}

export default NavbarSearch;
