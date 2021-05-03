import React from 'react';
import PropTypes from 'prop-types';

import './Tooltip.css';

function Tooltip({ children }) {
  return (
    <div className="tooltip">
      <p>{children}</p>
      <div className="triangle" />
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.string,
};

export default Tooltip;
