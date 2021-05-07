import React from 'react';
import PropTypes from 'prop-types';
import { FolderIcon, DocumentTextIcon } from '@heroicons/react/solid';

export default function File({ file, handleClickFile }) {
  return (
    <li className="text-white cursor-pointer">
      <button className="flex focus:outline-none" onClick={() => handleClickFile(file.type, file.name)}>
        {file.type === 'dir' ? <FolderIcon className="h-5 w-5" /> : <DocumentTextIcon className="h-5 w-5" />}
        {file.name}
      </button>
    </li>
  );
}

File.propTypes = {
  file: PropTypes.object,
  handleClickFile: PropTypes.func,
};
