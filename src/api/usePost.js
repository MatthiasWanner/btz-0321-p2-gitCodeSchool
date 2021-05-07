import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from './api';
import { CREATE_REPOS_URL } from './endpoints';

export function usePost(data) {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const authorization = localStorage.ghTokenKey !== undefined ? `token ${localStorage.ghTokenKey}` : '';
    const config = {
      headers: { Authorization: authorization },
      data: {
        name: data.name,
        description: data.description,
        private: data.type,
      },
    };
    const getRepos = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const request = await axios.post(`${API_URL}${CREATE_REPOS_URL}`, config);
        setDatas(request);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRepos();
  }, [data]);

  return { datas, error, isLoading };
}
