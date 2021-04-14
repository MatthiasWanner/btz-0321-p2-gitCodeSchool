import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

//https://api.github.com/users/%7Busername%7D

function Profile() {
  const [profileRepos, setProfileRepos] = useState([]);

  useEffect(() => {
    const getProfileRepos = () => {
      axios
        .get('https://api.github.com/users/freeCodeCamp')

        .then((res) => {
          setProfileRepos(res);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProfileRepos();
  }, []);

  return (
    <>
      <Link to="/profile"> Profile </Link>
    </>
  );
}

export default Profile;
