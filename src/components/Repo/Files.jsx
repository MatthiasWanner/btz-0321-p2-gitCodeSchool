import { CONTENT_REPO_URL } from '../../api/endpoints';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../api/api';

export default function Files({ endpoint }) {
  const contentsEndpoint = `${endpoint}/contents`;
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}${contentsEndpoint}`)
      .then((res) => {
        setFiles(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {files.map((file) => {
        return (
          <p className="text-green-900" key={file.sha}>
            {file.name}
          </p>
        );
      })}
      <h1>ok</h1>
    </div>
  );
}
