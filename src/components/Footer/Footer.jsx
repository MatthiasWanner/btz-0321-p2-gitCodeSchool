import React from 'react';
import './Footer.css';

function Footer({logOut, noLogOut}) {
  return (
    <>
      <p>Footer</p>
      { noLogOut &&
        <>
        <button onClick={logOut} className="logOutB">Logout</button>
        </>

      }
    </>
  );
}

export default Footer;
