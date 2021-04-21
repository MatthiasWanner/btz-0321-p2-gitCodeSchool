import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { login } from './api/api';
import { HOME_REPOS_URL, PROFIL_HOME } from './api/endpoints';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileRepos from './components/ProfileRepos/ProfileRepos';
import Toolbox from './components/Toolbox/Toolbox';
import Repo from './components/Repo/Repo';
import Modal from './components/Modal/Modal';
import { ModalContext } from './components/Contexts';
import Routes from './components/Routes';

function App() {
  const [pseudo, setPseudo] = useState(localStorage.ghPseudo);
  const [isLogged, setIsLogged] = useState(pseudo !== undefined);
  const [endpoint, setEndpoint] = useState(!isLogged ? HOME_REPOS_URL : PROFIL_HOME.replace('{username}', pseudo));
  const [modal, setModal] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickLogin = async (e, tokenKey) => {
    try {
      e.preventDefault();

      const res = await login(tokenKey);

      setIsLogged(true);
      setPseudo(res.login);
      setEndpoint(PROFIL_HOME.replace('{username}', res.login));
      setModal({
        title: 'Connexion réussie',
        content: `Vous vous êtes connecté sur : ${res.login}`,
        closeButton: 'Fermer',
        error: false,
      });
      setModalOpen(true);
    } catch (e) {
      setModal({
        title: 'Erreur Modal',
        content: 'Erreur. Veuillez retenter.',
        closeButton: 'Fermer',
        error: true,
      });
      setModalOpen(true);
      setIsLogged(false);
    }
  };

  const handleClickLogout = () => {
    localStorage.removeItem('tokenKey');
    setPseudo('');
    setIsLogged(false);
    setEndpoint(HOME_REPOS_URL);
    setModal({
      title: 'Deconnexion',
      content: 'Deconnecte',
      closeButton: 'Fermer',
      error: true,
    });
    setModalOpen(true);
  };

  const bodyClasses = 'container min-h-screen m-auto';
  const mainContainerClasses = 'flex flex-col justify-between items-center min-h-screen';

  return (
    <ModalContext.Provider value={{ modal, setModal, modalOpen, setModalOpen }}>
      {modalOpen && <Modal {...{ modal, setModal, setModalOpen }} />}

      <div className={`body-container ${bodyClasses}`}>
        <Router>
          <Navbar />
          <div className={`main-container ${mainContainerClasses}`}>
            <Switch>
              <Routes isLogged={isLogged} handleClickLogin={handleClickLogin} endpoint={endpoint} />
            </Switch>
          </div>
        </Router>
        <Footer handleClickLogout={handleClickLogout} isLogged={isLogged} />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
