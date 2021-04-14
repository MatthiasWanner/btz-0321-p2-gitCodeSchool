import React, { useState, useEffect } from 'react';
import './Home.css';
import Form from '../../components/Form/Form';
import Boxrepo from '../../components/Boxrepo/Boxrepo';
import axios from 'axios';

function Home({ logIn, onLine }) {
  const [homeRepos, setHomeRepos] = useState([]);

  useEffect(() => {
    const getHomeRepos = () => {
      axios
        .get('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=20')

        .then((res) => {
          setHomeRepos(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getHomeRepos();
  }, []);

  return (
    <>
      <div className="baner">
        <h3>Welcome to Git Code School</h3>
        <img src="" alt="logo" />
        {/* logo */}
        <div className="scrollMore">
          <p>Défile si tu en veux plus</p>
          <img src="#" alt="" />
          {/* Fleche */}
        </div>
      </div>
      <div className="backBottom">
        {!onLine && (
          <>
            <Form logIn={logIn} />
          </>
        )}
        {homeRepos.map((repo) => (
          <Boxrepo key={repo.id} {...repo} />
        ))}
      </div>
    </>
  );
}

export default Home;
