import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import File from './File';
import { useGetAll } from '../../api/useGet';

export default function Files({ filesEndpoint, handleClickFile, handleClickPath, directory }) {
  const files = useGetAll(filesEndpoint);
  const [path, setPath] = useState([]);

  useEffect(() => {
    setPath([
      ...path,
      {
        directory: directory,
        endpoint: filesEndpoint,
      },
    ]);
  }, [directory]);

  const handleClickReturn = (index, endpoint) => {
    const clickPosition = index + 1;
    const n = path.length - clickPosition;
    path.splice(clickPosition, n);
    handleClickPath(endpoint);
  };

  return (
    <div className="w-full border border-white">
      <div>
        {path.map((item, index) => {
          return (
            <button className="path-item cursor-pointer text-yellow-400" key={index} onClick={() => handleClickReturn(index, item.endpoint)}>
              {item.directory}
            </button>
          );
        })}
      </div>
      <ul>
        {files.datas.map((file) => {
          return <File handleClickFile={handleClickFile} file={file} key={file.sha} />;
        })}
      </ul>
    </div>
  );
}

Files.propTypes = {
  filesEndpoint: PropTypes.string,
  handleClickFile: PropTypes.func,
  handleClickPath: PropTypes.func,
  directory: PropTypes.string,
};
