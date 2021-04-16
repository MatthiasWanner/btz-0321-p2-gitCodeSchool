import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navbarClasses = 'fixed text-gold-dark bg-black w-full';
  const navbarClassesMd = 'relative';

  return (
    <div className={`navbar ${navbarClasses} ${navbarClassesMd}`}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/profile`}>Mon Profil</Link>
          </li>
          <li>
            <Link to={`/toolbox`}>Ma Toolbox</Link>
          </li>
          <li>
            <Link to={`/profile-repos`}>Mes Repos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
