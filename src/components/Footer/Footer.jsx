import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { LogoutIcon } from '@heroicons/react/outline';

function Footer({ isLogged, handleClickLogout }) {
  const history = useHistory();

  return (
    <footer className="flex flex-col h-[50px] bg-black border border-gold-dark color-gold-dark">
      <div className="flex flex-row justify-around items-center mt-8">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img src="src/img/GitHub-Mark-120px-plus.png" alt="logo-Octobat" className="w-12 bg-white border border-gold-dark rounded-full" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR" target="_blank" rel="noreferrer" className="justify-center">
          <img
            src="https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,f_auto,h_60/v1/static/i47pv2h3zaaf5zwhrvzp"
            alt="wildcodeschool"
            className="w-32"
          />
        </a>
        {isLogged && (
          <button
            className="flex flex-col items-center cursor-pointer border bg-red-400 border-red-400 rounded-full p-3 "
            onClick={handleClickLogout}>
            <LogoutIcon className="w-6 text-white bg-red-400" />
          </button>
        )}
      </div>
      <hr className="border 1px border-gold-dark w-3/4 mx-auto my-8 md:w-1/4" />

      <div className="text-gold">
        <ul className="grid grid-flow-col grid-cols-4 gap-4 ml-4 mr-4 mb-6">
          <li className="flex flex-col items-center ">
            <a href="https://github.com/Aeryle" target="_blank" rel="noreferrer" className="flex flex-col justify-start items-center">
              <img
                src="https://avatars.githubusercontent.com/u/47262222?v=4"
                alt="logo-Octobat"
                className="md:w-2/12 w-12 rounded-full border border-gold-dark"
              />
              <p className="w-16 md:w-52 md:text-lg text-xs text-center pt-2">Mickael Kergrohen</p>
            </a>
          </li>

          <li className="flex flex-col items-center">
            <a href="https://github.com/rcarondw" target="_blank" rel="noreferrer" className="flex flex-col justify-start items-center">
              <img
                src="https://avatars.githubusercontent.com/u/77199375?v=4"
                alt="logo-Octobat"
                className="md:w-2/12 w-12 rounded-full border border-gold-dark"
              />
              <p className="w-16 md:w-52 md:text-lg text-xs text-center pt-2"> Rémi Caron</p>
            </a>
          </li>
          <li className="flex flex-col items-center">
            <a href="https://github.com/matthiaswanner" target="_blank" rel="noreferrer" className="flex flex-col justify-start items-center">
              <img
                src="https://avatars.githubusercontent.com/u/77199375?v=4"
                alt="logo-Octobat"
                className="md:w-2/12 w-12 rounded-full border border-gold-dark"
              />
              <p className="w-16 md:w-52 md:text-lg text-xs text-center pt-2">Matthias Wanner</p>
            </a>
          </li>
          <li className="flex flex-col items-center">
            <a href="https://github.com/Chabelle78" target="_blank" rel="noreferrer" className="flex flex-col justify-start items-center">
              <img
                src="https://avatars.githubusercontent.com/u/78235274?s=400&u=dd99ed59c443a7cbe3b6e71c81ac62ba15ceba22&v=4"
                alt="logo-Octobat"
                className="md:w-2/12 w-12 rounded-full border border-gold-dark"
              />
              <p className="w-16 md:w-52 md:text-lg text-xs text-center pt-2">Estelle Chabat</p>
            </a>
          </li>
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
