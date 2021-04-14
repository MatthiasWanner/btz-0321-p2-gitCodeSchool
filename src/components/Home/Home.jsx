import React from 'react';
import './Home.css';
import Form from '../../components/Form/Form';
import Boxrepo from '../../components/Boxrepo/Boxrepo';

function Home({ logIn, onLine }) {
  const homeRepos = [
    {
      url: 'https://www.editions-delcourt.fr/sites/default/files/styles/image_mis_e/public/2020-06/blagues-de-toto-bloc1-10.jpg?itok=ijOrp6IU',
      userName: 'Beatriz',
      repoName: 'TitreB',
      nbStar: 22,
    },

    {
      url: 'https://www.editions-delcourt.fr/sites/default/files/styles/image_mis_e/public/2020-06/blagues-de-toto-bloc1-10.jpg?itok=ijOrp6IU',
      userName: 'Polo',
      repoName: 'JacksTitle',
      nbStar: 48,
    },

    {
      url: 'https://www.editions-delcourt.fr/sites/default/files/styles/image_mis_e/public/2020-06/blagues-de-toto-bloc1-10.jpg?itok=ijOrp6IU',
      userName: 'Bernardo',
      repoName: 'Titre2',
      nbStar: 2,
    },
  ];

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
        {homeRepos.map((repo, index) => (
          <Boxrepo key={index} {...repo} />
        ))}
      </div>
    </>
  );
}

export default Home;
