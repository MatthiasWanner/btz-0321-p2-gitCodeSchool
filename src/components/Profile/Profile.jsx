import React, { useEffect, useState } from 'react';
import './Profile.css';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import { useParams } from 'react-router';
import axios from 'axios';

function Profile() {
  const titleContainer = 'pt-[100px]';
  const [profile, setProfile] = useState('');
  const { pseudo } = useParams();
  const endpoint = PROFIL_URL.replace('{username}', pseudo);

  useEffect(() => {
    axios
      .get(`${API_URL}${endpoint}`)
      .then((res) => {
        setProfile(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pseudo]);

  return (
    <>
      <div className={`${titleContainer}`}>
        <h3 className="text-gold-dark text-2xl">Profil de {pseudo}</h3>
      </div>
    </>
  );
}

export default Profile;
