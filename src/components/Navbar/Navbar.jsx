import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import { FingerPrintIcon, BellIcon, PlusIcon, XIcon, MenuIcon } from '@heroicons/react/solid';
import NavbarSearch from '../NavbarSearch/NavbarSearch';
import './Navbar.css';
import NavbarLink from '../NavbarLink/NavbarLink';
import { ModalContext } from '../Contexts';

function Navbar({ username, isLogged }) {
  const { setModal, setModalOpen } = useContext(ModalContext);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const iconsHeight = {
    height: 50,
  };
  const [checkedValue, setCheckedValue] = useState(undefined);

  const links = [
    { to: '/', content: 'Accueil', displayed: true },
    { to: `/profile/${username}`, content: 'Profil', displayed: isLogged },
    { to: `/repos/${username}`, content: 'Mes repos', displayed: isLogged },
  ];

  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const haveRadioOpt = (e) => {
    console.log(e.target.value);
    // return e.target.value === checkedValue ? true : false;
  };

  const handleChangeRadio = (e) => {
    setCheckedValue(e.target.value);
  };

  const handleClicAdd = () => {
    setModal({
      title: 'Créer un repo',
      content: (
        <form>
          <input id="name" className="mb-3" />
          <input id="description" />
          <div>
            <input type="radio" id="public" name="public" value="public" checked={checkedValue === 'public'} onChange={handleChangeRadio} />
            <label htmlFor="public">public</label>

            <input type="radio" id="private" name="private" value="private" checked={checkedValue === 'private'} onChange={handleChangeRadio} />
            <label htmlFor="private">Private</label>
          </div>
        </form>
      ),
      buttons: [
        {
          content: 'Valider',
          color: 'bg-green-300 hover:bg-green-600',
        },
        {
          content: 'Annuler',
          color: 'bg-red-300 hover:bg-red-600',
        },
      ],
    });
    setModalOpen(true);
  };

  useEffect(() => {
    if (checkedValue) {
      handleClicAdd();
    }
  }, [checkedValue]);

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
      <BellIcon style={iconsHeight} className="sm:hidden" />

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
          <BellIcon className="h-7 pl-3" />
          <button onClick={handleClicAdd}>
            <PlusIcon className="h-7 pl-3" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  username: PropTypes.string,
  isLogged: PropTypes.bool,
};
