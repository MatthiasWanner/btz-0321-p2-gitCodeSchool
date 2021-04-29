import React from 'react';
import PropTypes from 'prop-types';

export default function File({ file, handleClickFile }) {
  return (
    <li className="text-white cursor-pointer">
      <button onClick={() => handleClickFile(file.type, file.name)}>{file.name}</button>
    </li>
  );
}

File.propTypes = {
  file: PropTypes.object,
  handleClickFile: PropTypes.func,
};
