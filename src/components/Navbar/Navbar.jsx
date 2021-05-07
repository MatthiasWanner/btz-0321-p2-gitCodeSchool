import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import { FingerPrintIcon, BellIcon, PlusIcon, XIcon, MenuIcon } from '@heroicons/react/solid';
import NavbarSearch from '../NavbarSearch/NavbarSearch';
import './Navbar.css';
import NavbarLink from '../NavbarLink/NavbarLink';
import AddRepo from '../AddRepo/AddRepo';
import { UnreadMessageContext } from '../Contexts';

function Navbar({ username, isLogged }) {
  const { unreadMessage } = useContext(UnreadMessageContext);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const iconsHeight = {
    height: 50,
  };

  const links = [
    { to: '/', content: 'Accueil', displayed: true },
    { to: `/profile/${username}`, content: 'Profil', displayed: isLogged },
    { to: `/repos/${username}`, content: 'Mes repos', displayed: isLogged },
  ];
  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <div
      className="fixed w-full top-0 h-14 flex justify-between sm:justify-start bg-homeGray-dark backdrop-filter backdrop-blur bg-opacity-80 text-gold-dark"
      style={{ maxWidth: 1440 }}>
      <Menu>
        <Menu.Button className="flex sm:hidden items-center focus:outline-none">
          {isBurgerOpen ? <XIcon style={iconsHeight} onClick={handleClick} /> : <MenuIcon style={iconsHeight} onClick={handleClick} />}
        </Menu.Button>
        <Menu.Items className="absolute w-full top-14 flex flex-col bg-homeGray-dark backdrop-filter backdrop-blur bg-opacity-80 focus:outline-none">
          {links
            .filter((link) => link.displayed)
            .map((link) => (
              <Menu.Item key={link.to}>
                {() => (
                  <div className="px-10 flex items-center">
                    <NavbarLink classList="mr-3 py-2 text-white" to={link.to}>
                      {link.content}
                    </NavbarLink>
                    <span style={{ height: 1 }} className="w-content flex-grow bg-gold-dark" />
                  </div>
                )}
              </Menu.Item>
            ))}
          <NavbarSearch />
        </Menu.Items>
      </Menu>

      <FingerPrintIcon style={iconsHeight} className="sm:hidden" />
      <div className="flex flex-row-reverse">
        {unreadMessage > 0 && <div className="absolute w-5 h-5 mt-1 mr-1 rounded-full bg-red-600 animate-pulse" />}
        <BellIcon style={iconsHeight} className="sm:hidden" />
      </div>

      <ul className="hidden sm:flex w-full h-14 px-3 justify-between">
        <li className="flex items-center">
          <Link to="/" replace>
            <FingerPrintIcon className="h-9" />
          </Link>
          {links
            .filter((link) => link.displayed)
            .map((link) => (
              <div key={link.to} className="group align-middle flex flex-col items-center">
                <NavbarLink classList="animate-width px-5 text-lg" to={link.to}>
                  {link.content}
                </NavbarLink>
              </div>
            ))}
        </li>
        <li className="flex items-center">
          <NavbarSearch />
          <div className="flex flex-row-reverse">
            {unreadMessage > 0 && <div className="absolute w-3 h-3 rounded-full bg-red-600 animate-pulse" />}
            <BellIcon className="h-7 pl-3" />
          </div>
          <button className="focus:outline-none" onClick={() => setShowForm(!showForm)}>
            <PlusIcon className="h-7 pl-3" />
          </button>
        </li>
      </ul>
      {showForm && <AddRepo setShowForm={setShowForm} showForm={showForm} />}
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  username: PropTypes.string,
  isLogged: PropTypes.bool,
};
