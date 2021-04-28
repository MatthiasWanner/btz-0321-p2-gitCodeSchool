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
        if (Array.isArray(data)) {
          setDatas(data);
        } else {
          setDatas(data.items);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRepos();
  }, [endpoint]);

  return { datas, error, isLoading };
}

export function useGetOne(endpoint) {
  const [datas, setDatas] = useState({});
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
          setIsLoading(false);
      }
    };
    getRepos();
  }, [endpoint]);

  return { datas, error, isLoading };
}

export function useGetFile(endpoint) {
  const [datas, setDatas] = useState({});
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
        data.content = atob(data.content);
        setDatas(data);
      } catch (error) {
        setError(error);
      } finally {
          setIsLoading(false);  
      }
    };
    getRepos();
  }, [endpoint]);

  return { datas, error, isLoading };
}
