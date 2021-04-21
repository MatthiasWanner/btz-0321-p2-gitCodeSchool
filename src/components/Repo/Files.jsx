import React, { useEffect, useState } from 'react';
import File from './File';
import axios from 'axios';
import API_URL from '../../api/api';

export default function Files({ filesEndpoint, handleClickFile, directory }) {
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
        files: files,
        path: path,
      },
    ]);
  }, [directory]);

  const handleClickPath = (index) => {
    setFiles(path[index].files);
    setPath(path[index].path);
  };

  return (
    <div className="border border-white">
      <div>
        {path.map((item, index) => {
          return <span className="path-item" key={index} onClick={() => handleClickPath(index)}>{item.directory}</span>;
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
