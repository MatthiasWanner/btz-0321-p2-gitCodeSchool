import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { FingerPrintIcon, BellIcon, PlusIcon, UserIcon, XIcon, MenuIcon } from '@heroicons/react/solid';
import NavbarSearch from '../NavbarSearch/NavbarSearch';
import './Navbar.css';
import NavbarLink from '../NavbarLink/NavbarLink';

function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const iconsHeight = {
    height: 50,
  };

  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const links = [
    { to: '/', content: 'Accueil' },
    { to: '/profile', content: 'Profil' },
    { to: '/toolbox', content: 'Ma Toolbox' },
    { to: '/profile-repos', content: 'Mes repos' },
  ];

  return (
    <div className="sticky top-0 w-full h-14 flex justify-between sm:justify-start bg-homeGray-dark backdrop-filter backdrop-blur bg-opacity-80 text-gold-dark">
      <Menu>
        <Menu.Button className="flex sm:hidden items-center focus:outline-none">
          {isBurgerOpen ? <XIcon style={iconsHeight} onClick={handleClick} /> : <MenuIcon style={iconsHeight} onClick={handleClick} />}
        </Menu.Button>
        <Menu.Items className="absolute w-full top-14 flex flex-col bg-homeGray-dark backdrop-filter backdrop-blur bg-opacity-80 focus:outline-none">
          {links.map((link) => (
            <Menu.Item key={link.to}>
              {() => (
                <div className="px-10 flex items-center">
                  <a href={link.to} className="mr-3 py-2 text-white">
                    {link.content}
                  </a>
                  <span style={{ height: 1 }} className="w-content flex-grow bg-gold-dark" />
                </div>
              )}
            </Menu.Item>
          ))}
          <NavbarSearch />
        </Menu.Items>
      </Menu>

      <FingerPrintIcon style={iconsHeight} className="sm:hidden" />
      <BellIcon style={iconsHeight} className="sm:hidden" />

      <ul className="hidden sm:flex w-full h-14 px-3 justify-between">
        <li className="flex items-center">
          <Link to="/">
            <FingerPrintIcon className="h-9" />
          </Link>
          {links.map((link) => (
            <div key={link.to} className="group align-middle flex flex-col items-center">
              <NavbarLink to={link.to}>{link.content}</NavbarLink>
            </div>
          ))}
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
