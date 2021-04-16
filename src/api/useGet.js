
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from './api'

export function useGetAll(endpoint) {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const authorization = localStorage.ghTokenKey !== undefined ? `token ${localStorage.ghTokenKey}` : '' ;
      const config = {headers: {Authorization: authorization}};
      const getRepos = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const {data} = await axios.get(`${api}${endpoint}`, config);
          if(Array.isArray(data)){
            setDatas(data)
          }else{
            setDatas(data.items);
          }
        } catch (error) {
          setError(error);
        } finally {
          setTimeout(() => {setIsLoading(false)}, 1000);
        }
      };
      getRepos();
    }, [endpoint]);
  
    return { datas, error, isLoading };
  }

export function useGetOne(id) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const getOne = async () => {
      const { data } = await axios.get(`${TODOS_URL}/${id}`);

      setTodo(data);
    };

    getOne();
  }, []);

  return todo;
}