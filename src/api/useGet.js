import { useEffect, useState } from 'react';
import axios from 'axios';
import api from './api';
import { FOLLOWING_URL, EVENTS_URL } from './endpoints';

export function useGetAll(endpoint) {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const [isRepoHomeLoading, setisRepoHomeLoading] = useState(true);
  useEffect(() => {
    const authorization = localStorage.ghTokenKey !== undefined ? `token ${localStorage.ghTokenKey}` : '';
    const config = { headers: { Authorization: authorization } };
    const getRepos = async () => {
      setError(null);
      setisRepoHomeLoading(true);
      try {
        const { data } = await axios.get(`${api}${endpoint}`, config);
        if (Array.isArray(data)) {
          setDatas(data);
        } else {
          setDatas(data.items);
        }
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setisRepoHomeLoading(false);
        }, 1000);
      }
    };
    getRepos();
    return () => {
      setDatas([]);
    };
  }, []);

  return { datas, error, isRepoHomeLoading };
}

export function useGetNewsFields(pseudo) {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const authorization = localStorage.ghTokenKey !== undefined ? `token ${localStorage.ghTokenKey}` : '';
  const config = { headers: { Authorization: authorization } };
  useEffect(() => {
    const getFollowing = async (url) => {
      setError(null);
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${api}${url}`, config);
        setDatas(data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    getFollowing(FOLLOWING_URL.replace('{username}', pseudo));
    return () => {
      setDatas([]);
    };
  }, [pseudo]);
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   const getEvents = async (array, url) => {
  //     setError(null);
  //     setIsLoading(true);
  //     array.map(async (item) => {
  //       const endpoint = url.replace('{username}', item.login);
  //       const followingEvents = {};
  //       followingEvents.name = item.login;
  //       try {
  //         const { data } = await axios.get(`${api}${endpoint}`, config);
  //         followingEvents.events = data;
  //         setEvents(...events, followingEvents);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setIsLoading(false)
  //       }
  //     });
  //   };
  //   getEvents(following, EVENTS_URL);
  // }, [following]);
  return { datas, error, isLoading };
}

export function useGetOne() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const getOne = async () => {
      const { data } = await axios.get(``);

      setTodo(data);
    };

    getOne();
  }, []);

  return todo;
}
