import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

NavbarLink.propTypes = {};

function NavbarLink({ children, to }) {
  return (
    <Link className="animate-width px-5 text-lg" to={to}>
      {children}
    </Link>
  );
}

NavbarLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
};

export default NavbarLink;
