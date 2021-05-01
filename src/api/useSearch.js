import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from './api';

export function useGetAll(endpoint) {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const authorization = localStorage.ghTokenKey !== undefined ? `token ${localStorage.ghTokenKey}` : '';
    const config = { headers: { Authorization: authorization } };
    const getRepos = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${API_URL}${endpoint}`, config);
        setDatas(data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    getRepos();
  }, [endpoint]);

  return { datas, error, isLoading };
}
