import React, { useState, useEffect, useContext } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import '@material-tailwind/react/tailwind.css';
import { login } from './api/api';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { ChatContext, ModalContext } from './components/Contexts';
import Routes from './components/Routes';
import BotBar from './components/BotBar/BotBar';

function App() {
  const socket = useContext(ChatContext);

  const [username, setUsername] = useState(localStorage.ghUsername);
  const [isLogged, setIsLogged] = useState(username !== undefined);
  useEffect(() => {
    username ? setIsLogged(true) : setIsLogged(false);

    // noinspection JSCheckFunctionSignatures
    username && socket.emit('user:connect', username);
  }, [username]);
  const [modal, setModal] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickLogin = async (e, tokenKey) => {
    try {
      e.preventDefault();

      const res = await login(tokenKey);
      setUsername(res.login);
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

  const handleClickLogout = (history) => {
    localStorage.removeItem('ghUsername');
    localStorage.removeItem('ghTokenKey');
    setUsername(undefined);
    setModal({
      title: 'Déconnexion',
      content: 'Déconnecté avec succès',
      buttons: [
        {
          content: 'Accueil',
          color: 'bg-green-300 hover:bg-green-600',
          onClick: () => history.push('/'),
        },
        {
          content: 'Je reste ici',
          color: 'bg-green-300 hover:bg-green-600',
        },
      ],
    });
    setModalOpen(true);
  };

  const bodyClasses = 'mx-auto min-h-screen';
  const mainContainerClasses = 'flex flex-col justify-start items-center w-full min-h-screen';

  return (
    <ModalContext.Provider value={{ modal, setModal, modalOpen, setModalOpen }}>
      {modalOpen && <Modal {...{ modal, setModal, setModalOpen }} />}

      <div className={`body-container ${bodyClasses}`} style={{ maxWidth: 1440 }}>
        <Router>
          <Navbar username={username} isLogged={isLogged} />
          <BotBar />
          <div className={`main-container ${mainContainerClasses}`}>
            <Switch>
              <Routes isLogged={isLogged} handleClickLogin={handleClickLogin} username={username} />
            </Switch>
          </div>
          <Footer handleClickLogout={handleClickLogout} isLogged={isLogged} />
        </Router>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
