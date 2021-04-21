import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../api/api';
import { CONTENT_REPO_URL } from '../../api/endpoints';

export default function ContentOverview({ fileEndPoint }) {
  const [overviewContent, setOverviewContent] = useState('');

  function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  useEffect(() => {
    axios
      .get(`${API_URL}${fileEndPoint}`)
      .then((res) => {
        res.data.content = atob(res.data.content);
        setOverviewContent(res.data);
        console.log(res.data);
      })
      .catch(console.error);
  }, [fileEndPoint]);

  return (
    <div className="border border-white">
      <p>{overviewContent.name}</p>
      <p className="text-white">{overviewContent.content}</p>
    </div>
  );
}
