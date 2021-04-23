import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

NavbarLink.propTypes = {};

function NavbarLink({ children, classList, to }) {
  return (
    <Link className={classList} to={to} replace>
      {children}
    </Link>
  );
}

NavbarLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  classList: PropTypes.string,
};

export default NavbarLink;
