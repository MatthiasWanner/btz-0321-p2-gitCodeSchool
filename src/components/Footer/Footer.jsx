import React from 'react';
import './Footer.css';

function Footer({logOut}) {
  return (
    <>
      <p>Footer</p>
      <button onClick={logOut} className="logOutB">Logout</button>
    </>
  );
}

export default Footer;
