import React, { useEffect, useState } from 'react';
import File from './File';
import axios from 'axios';
import API_URL from '../../api/api';

export default function Files({ filesEndpoint, handleClickFile, directory }) {
  const [endpoint, setEndpoint] = useState(filesEndpoint);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}${filesEndpoint}`)
      .then((res) => {
        setFiles(res.data);
      })
      .then((data) => {
        setPath;
      })
      .catch(() => {
        console.error;
      });
  }, [endpoint, filesEndpoint]);

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

  const handleClickPath = (endpoint) => {
    setEndpoint(endpoint);
  };

  return (
    <div className="border border-white">
      <div>
        {path.map((item, index) => {
          return (
            <span className="path-item" key={index} onClick={() => handleClickPath(item.endpoint)}>
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
