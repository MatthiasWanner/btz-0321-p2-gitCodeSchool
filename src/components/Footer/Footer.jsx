import React from 'react';
import PropTypes from 'prop-types';

function Footer({ isLogged, handleClickLogout }) {
  return (
    <footer className="flex content-center justify-end h-[50px] bg-black border border-gold-dark color-gold-dark">
      {isLogged && (
        <div className="flex items-center">
          <p className="m-0 p-0">Sign out</p>
          <button className="w-5 h-5 ml-3 mr-2 bg-red-400 p-0 rounded-full" onClick={handleClickLogout} />
        </div>
      )}
    </footer>
  );
}
Footer.propTypes = {
  isLogged: PropTypes.bool,
  handleClickLogout: PropTypes.func,
};
export default Footer;
