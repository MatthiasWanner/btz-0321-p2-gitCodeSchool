import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { login } from './api/api';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileRepos from './components/ProfileRepos/ProfileRepos';
import Toolbox from './components/Toolbox/Toolbox';
import Repo from './components/Repo/Repo';

function App() {
  const [pseudo, setPseudo] = useState(localStorage.ghPseudo);
  const [isLogged, setIsLogged] = useState(pseudo ? true : false);
  useEffect(() => {
    setTimeout(() => {
      pseudo ? setIsLogged(true) : setIsLogged(false);
    }, 500);
  }, [pseudo]);

  const handleClickLogin = async (e, tokenKey) => {
    try {
      e.preventDefault();

      const res = await login(tokenKey);
      setPseudo(res.login);
    } catch {
      // console.error(e);
      setPseudo(undefined);
    }
  };

  const handleClickLogout = () => {
    localStorage.clear('tokenKey');
    setPseudo(undefined);
  };

  const bodyClasses = 'max-w-[1200px] min-h-screen m-auto';
  const mainContainerClasses = 'flex flex-col justify-between items-center min-h-screen';

  return (
    <div className={`body-container ${bodyClasses}`}>
      <Router>
        <Navbar />
        <div className={`main-container ${mainContainerClasses}`}>
          <Switch>
            <Route exact path="/">
              <Home isLogged={isLogged} handleClickLogin={handleClickLogin} pseudo={pseudo} />
            </Route>
            <Route path="/profile" component={Profile} />
            <Route path="/profile-repos" component={ProfileRepos} />
            <Route path="/toolbox" component={Toolbox} />
            <Route path="/repos/:username/:repo" component={Repo} />
          </Switch>
        </div>
      </Router>
      <Footer handleClickLogout={handleClickLogout} isLogged={isLogged} />
    </div>
  );
}

export default App;
