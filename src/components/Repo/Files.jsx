import { CONTENT_REPO_URL } from '../../api/endpoints';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../api/api';


export default function Files({ endpoint, handleClickFile, handleClickDir}) {
  const contentsEndpoint = `${endpoint}/contents`;
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}${contentsEndpoint}`)
      .then((res) => {
        setFiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function haveTheFunction(type, url){
    if(type === "file"){
      return handleClickFile(url);
      
    } else if(type === "dir"){
      return handleClickDir();
    } 
  }

  return (
    <div className="border border-white">
      <ul>
      {files.map((file) => {

        return (          
          <li onClick={()=>{haveTheFunction(file.type, file.url)}} 
          className="text-white" key={file.sha}>
            {file.name}
          </li>

        );
      })}
      </ul>
    </div>
  );
}


