import React from 'react';
import PropTypes from 'prop-types';

export default function File({ file, handleClickFile }) {
  return (
    <li className="text-white cursor-pointer" onClick={() => handleClickFile(file.type, file.name)}>
      {file.name}
    </li>
  );
}

File.propTypes = {
  file: PropTypes.object,
  handleClickFile: PropTypes.func,
};
