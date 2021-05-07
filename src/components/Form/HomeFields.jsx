import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import ghLogo from '../../img/gh-logo.png';
import './HomeFields.css';
import GitLogo from '/src/img/Gitlogo.png';

function HomeFields({ handleClickLogin }) {
  const [tokenKey, setTokenKey] = useState('');

  const tokonLabelClasses = 'text-center text-gold-dark text-2xl border-b border-gold-dark';
  const inputTokenClasses = ' rounded-3xl w-4/5 border border-black text-center focus:outline-none focus:ring focus:ring-gold-dark py-1';
  const submitHomeClasses =
    'w-2/3 text-white py-1 bg-gold-dark text-white font-semibold rounded-3xl shadow-lg border border-black from-white hover:bg-gold-hover focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';
  const pClasses = 'text-xs text-white';
  const aClasses = 'text-gold-dark font-bold';

  return (
    <>
      <label htmlFor="token" className={`${tokonLabelClasses}`}>
        Connexion
      </label>
      <img src={GitLogo} alt="Github Logo" className="w-16 border rounded-full bg-gold-dark border-gold-dark" />
      <input
        id="token"
        className={`${inputTokenClasses}`}
        placeholder="Collez votre clé token ici"
        value={tokenKey}
        onChange={(e) => setTokenKey(e.target.value)}
      />
      <button
        className={`${submitHomeClasses}`}
        onClick={(e) => {
          handleClickLogin(e, tokenKey);
          setTokenKey('');
        }}>
        Se connecter
      </button>
      <p className={`${pClasses}`}>
        {`Je n'ai pas encore de clé Token? En obtenir une `}
        <a href="https://github.com/settings/tokens" className={`${aClasses}`} target="_blank" rel="noreferrer">
          ici
        </a>
      </p>
    </>
  );
}

HomeFields.propTypes = {
  handleClickLogin: PropTypes.func,
};

export default HomeFields;
