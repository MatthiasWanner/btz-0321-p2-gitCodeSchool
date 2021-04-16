import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from '@headlessui/react';
import {FingerPrintIcon, BellIcon, PlusIcon, UserIcon, XIcon, MenuIcon} from '@heroicons/react/solid';
import NavbarSearch from '../NavbarSearch/NavbarSearch';

function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const iconsHeight = {
    height: 50
  };

  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const links = [
    {to: '/', content: 'Mon Profil'},
    {to: '/profile', content: 'Mon Profil'},
    {to: '/toolbox', content: 'Ma Toolbox'},
    {to: '/profile-repos', content: 'Mes Repos'}
  ];

  return (
    <div
      className="top-0 w-full h-[60px] flex justify-between sm:justify-start bg-[#1E2020] bg-opacity-60 text-[#CBAC77]">
      <Menu>
        <Menu.Button className="flex sm:hidden items-center">
          {isBurgerOpen ?
            <XIcon style={iconsHeight} onClick={handleClick} /> :
            <MenuIcon style={iconsHeight} onClick={handleClick} />}
        </Menu.Button>
        <Menu.Items className="absolute w-full top-[50px] flex flex-col bg-[#1E2020] text-[#CBAC77]">
          {
            links.map((link) => (
              <Menu.Item key={link.to}>
                {
                  () => (
                    <div className="px-[40px] flex items-center">
                      <a href={link.to} className="mr-3 py-2">{link.content}</a>
                      <span className="w-content h-[1px] flex-grow bg-red-400">{' '}</span>
                    </div>
                  )
                }
              </Menu.Item>
            ))
          }
          <NavbarSearch />
        </Menu.Items>
      </Menu>

      <FingerPrintIcon style={iconsHeight} className="sm:hidden" />
      <BellIcon style={iconsHeight} className="sm:hidden" />

      <ul className="hidden sm:flex w-full h-[60px] px-3 justify-between items-center">
        <li className="flex items-center">
          <div><FingerPrintIcon className="h-9" /></div>
          <div className="px-5">Home</div>
          <div className="px-5">About us</div>
          <div className="px-5">Contact us</div>
          <div className="px-5">All repos</div>
        </li>
        <li className="flex items-center">
          <NavbarSearch />
          <BellIcon className="h-7 pl-3" />
          <PlusIcon className="h-7 pl-3" />
          <UserIcon className="h-7 pl-3" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
