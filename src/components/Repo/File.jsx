import React from 'react';

export default function File({ file, handleClickFile }) {
  return (
    <li className="text-white cursor-pointer" onClick={() => handleClickFile(file.type, file.name)}>
      {file.name}
    </li>
  );
}
