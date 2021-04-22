import React, { useEffect, useState } from 'react';
import File from './File';
import axios from 'axios';
import API_URL from '../../api/api';

export default function Files({ filesEndpoint, handleClickFile, handleClickPath, directory }) {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}${filesEndpoint}`)
      .then((res) => {
        setFiles(res.data);
      })
      .catch(() => {
        console.error;
      });
  }, [filesEndpoint]);

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
            <span className="path-item cursor-pointer text-yellow-400" key={index} onClick={() => handleClickReturn(index, item.endpoint)}>
              {item.directory}
            </span>
          );
        })}
      </div>
      <ul>
        {files.map((file) => {
          return <File handleClickFile={handleClickFile} file={file} key={file.sha} />;
        })}
      </ul>
    </div>
  );
}
