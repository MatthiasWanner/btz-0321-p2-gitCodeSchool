import React, { useState, useEffect } from 'react';
import './ProfileRepos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReposDetails from './ReposDetails';

//https://api.github.com/users/%7Busername%7D

function ProfileRepos() {
  const [profileRepos, setProfileRepos] = useState([]);

  useEffect(() => {
    const getProfileRepos = () => {
      axios
        .get('https://api.github.com/users/freeCodeCamp/repos')

        .then((res) => {
          setProfileRepos(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProfileRepos();
  }, []);

  return (
    <>
      <div>
        <Link to="/profile-Repos"> Mes Repos</Link>
        {profileRepos.map((list) => (
          <ReposDetails key={list.id} {...list} />
        ))}
      </div>
    </>
  );
}

export default ProfileRepos;
