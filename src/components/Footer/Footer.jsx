import React from 'react';
import PropTypes from 'prop-types';
import { LogoutIcon } from '@heroicons/react/outline';

function Footer({ isLogged, handleClickLogout }) {
  return (
    <footer className="flex flex-col h-[50px] bg-black border border-gold-dark color-gold-dark">
      <div className="flex flex-row justify-around items-center">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="logo-Octobat" className="w-20" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,f_auto,h_60/v1/static/i47pv2h3zaaf5zwhrvzp"
            alt="wildcodeschool"
            className="w-20"
          />
        </a>
        {isLogged && (
          <button className="flex flex-col items-center cursor-pointer" onClick={handleClickLogout}>
            <p className="m-0 p-0 text-red-400">Déconnexion</p>
            <LogoutIcon className="ml-2 w-5 text-red-400" />
          </button>
        )}
      </div>
      <div className="text-gold">
        <ul className="flex md:justify-around">
          <a href="https://github.com/Aeryle" target="_blank" rel="noreferrer">
            <li className="md:flex md:flex-row-reverse md:justify-evenly md:items-center">
              Mickael Kergrohen
              <img
                src="https://avatars.githubusercontent.com/u/47262222?v=4"
                alt="logo-Octobat"
                className="w-10 rounded-full border border-gold-dark"
              />
            </li>
          </a>
          <a href="https://github.com/Aeryle" target="_blank" rel="noreferrer">
            <li className="md:flex md:flex-row-reverse md:justify-evenly md:items-center">
              Rémi Caron
              <img
                src="https://avatars.githubusercontent.com/u/77199375?v=4"
                alt="logo-Octobat"
                className="w-10 rounded-full border border-gold-dark"
              />
            </li>
          </a>
          <a href="https://github.com/Rcarondw" target="_blank" rel="noreferrer">
            <li className="md:flex md:flex-row-reverse md:justify-evenly md:items-center">
              Matthias Wanner
              <img
                src="https://avatars.githubusercontent.com/u/77199375?v=4"
                alt="logo-Octobat"
                className="w-10 rounded-full border border-gold-dark"
              />
            </li>
          </a>
          <a href="https://github.com/Chabelle78" target="_blank" rel="noreferrer">
            <li className="md:flex md:flex-row-reverse md:justify-evenly md:items-center">
              Estelle Chabat
              <img
                src="https://avatars.githubusercontent.com/u/78235274?s=400&u=dd99ed59c443a7cbe3b6e71c81ac62ba15ceba22&v=4"
                alt="logo-Octobat"
                className="w-10 rounded-full border border-gold-dark"
              />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isLogged: PropTypes.bool,
  handleClickLogout: PropTypes.func,
};

export default Footer;
