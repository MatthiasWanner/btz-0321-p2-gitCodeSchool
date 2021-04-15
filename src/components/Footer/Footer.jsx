import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

function Footer({ isLogged, handleClickLogout }) {
  return (
    <footer className="footer">
      {isLogged && (
        <div className="sign-out-btn-container">
          <button className="sign-out-btn" onClick={(e) => handleClickLogout(e)}></button>
          <p>Sign out</p>
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
