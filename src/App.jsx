import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { login } from './api/api';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { ModalContext } from './components/Contexts';
import Routes from './components/Routes';

function App() {
  const [pseudo, setPseudo] = useState(localStorage.ghPseudo);
  const [isLogged, setIsLogged] = useState(pseudo !== undefined);
  useEffect(() => {
    pseudo ? setIsLogged(true) : setIsLogged(false);
  }, [pseudo]);
  const [modal, setModal] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickLogin = async (e, tokenKey) => {
    try {
      e.preventDefault();

      const res = await login(tokenKey);
      setPseudo(res.login);
      setModal({
        title: 'Connexion réussie',
        content: `Vous êtes connecté sur ${res.login}`,
        buttons: [
          {
            content: 'Valider',
            color: 'bg-green-300 hover:bg-green-600',
          },
          {
            content: 'Se déconnecter',
            color: 'bg-red-300 hover:bg-red-600',
            onClick: () => handleClickLogout(),
          },
        ],
      });
      setModalOpen(true);
    } catch (e) {
      setModal({
        title: 'Erreur',
        content: 'Erreur lors de la connexion, veuillez vérifier votre token.',
        buttons: [
          {
            content: 'Compris',
            color: 'bg-red-300 hover:bg-red-600',
          },
        ],
        status: 'error',
      });
      setModalOpen(true);
      setIsLogged(false);
    }
  };

  const handleClickLogout = () => {
    localStorage.removeItem('ghPseudo');
    localStorage.removeItem('ghTokenKey');
    setPseudo(undefined);
    setModal({
      title: 'Déconnexion',
      content: 'Déconnecté avec succès',
      buttons: [
        {
          content: 'Fermer',
          color: 'bg-green-300 hover:bg-green-600',
        },
      ],
    });
    setModalOpen(true);
  };

  const bodyClasses = 'container mx-auto min-h-screen';
  const mainContainerClasses = 'flex flex-col justify-start items-center w-full min-h-screen';

  return (
    <ModalContext.Provider value={{ modal, setModal, modalOpen, setModalOpen }}>
      {modalOpen && <Modal {...{ modal, setModal, setModalOpen }} />}

      <div className={`body-container ${bodyClasses}`}>
        <Router>
          <Navbar />
          <div className={`main-container ${mainContainerClasses}`}>
            <Switch>
              <Routes isLogged={isLogged} handleClickLogin={handleClickLogin} pseudo={pseudo} />
            </Switch>
          </div>
        </Router>
        <Footer handleClickLogout={handleClickLogout} isLogged={isLogged} />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
