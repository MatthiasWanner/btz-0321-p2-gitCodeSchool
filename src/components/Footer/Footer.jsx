import React from 'react';
import PropTypes from 'prop-types';
import { LogoutIcon } from '@heroicons/react/outline';

function Footer({ isLogged, handleClickLogout }) {
  return (
    <footer className="flex content-center justify-end h-[50px] bg-black border border-gold-dark color-gold-dark">
      {isLogged && (
        <button className="flex items-center cursor-pointer" onClick={handleClickLogout}>
          <p className="m-0 p-0 text-red-400">Déconnexion</p>
          <LogoutIcon className="ml-2 w-5 text-red-400" />
        </button>
      )}
    </footer>
  );
}

Footer.propTypes = {
  isLogged: PropTypes.bool,
  handleClickLogout: PropTypes.func
};
export default Footer;
