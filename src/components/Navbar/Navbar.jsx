import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from '@headlessui/react';
import {FingerPrintIcon, BellIcon, PlusIcon, UserIcon, XIcon, MenuIcon} from '@heroicons/react/solid';
import NavbarSearch from '../NavbarSearch/NavbarSearch';
import './Navbar.css';

function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const iconsHeight = {
    height: 50
  };

  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const links = [
    {to: '/', content: 'Accueil'},
    {to: '/profile', content: 'Profil'},
    {to: '/toolbox', content: 'Ma Toolbox'},
    {to: '/profile-repos', content: 'Mes repos'}
  ];

  return (
    <div
      className="sticky top-0 w-full h-[3.75rem] flex justify-between sm:justify-start bg-homeGray-dark backdrop-filter backdrop-blur bg-opacity-80 text-[#CBAC77]">
      <Menu>
        <Menu.Button className="flex sm:hidden items-center focus:outline-none">
          {isBurgerOpen ?
            <XIcon style={iconsHeight} onClick={handleClick} /> :
            <MenuIcon style={iconsHeight} onClick={handleClick} />}
        </Menu.Button>
        <Menu.Items
          className="absolute w-full top-[3.75rem] flex flex-col bg-homeGray-dark backdrop-filter backdrop-blur bg-opacity-80 focus:outline-none">
          {
            links.map((link) => (
              <Menu.Item key={link.to}>
                {
                  () => (
                    <div className="px-[40px] flex items-center">
                      <a href={link.to} className="mr-3 py-2 text-white">{link.content}</a>
                      <span className="w-content h-[1px] flex-grow bg-gold-dark">{' '}</span>
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

      <ul className="hidden sm:flex w-full h-[3.75rem] px-3 justify-between items-center">
        <li className="flex items-center">
          <Link to="/"><FingerPrintIcon className="h-9" /></Link>
          {
            links.map((link) => (
              <div key={link.to} className="group align-middle flex flex-col items-center">
                <Link className="px-5 text-lg" to={link.to}>{link.content}</Link>
                <div
                  className="invisible group-hover:visible w-0 h-[1px] bg-white animate-width group-hover:w-1/2" />
              </div>
            ))
          }
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
