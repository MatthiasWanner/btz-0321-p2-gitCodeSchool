import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../api/api';

export default function ContentOverview({ fileEndPoint }) {
  const [overviewContent, setOverviewContent] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}${fileEndPoint}`)
      .then((res) => {
        res.data.content = atob(res.data.content);
        setOverviewContent(res.data);
      })
      .catch(console.error);
  }, [fileEndPoint]);

  return (
    <div className="border border-white">
      <p className="text-white">{overviewContent.name}</p>
      <p className="text-white">{overviewContent.content}</p>
    </div>
  );
}
