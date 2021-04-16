import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {login} from './api/api';
import {HOME_REPOS_URL, PROFIL_HOME} from './api/endpoints';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileRepos from './components/ProfileRepos/ProfileRepos';
import Toolbox from './components/Toolbox/Toolbox';
import Repo from './components/Repo/Repo';

function App() {
  const [pseudo, setPseudo] = useState(localStorage.ghPseudo);
  const [isLogged, setIsLogged] = useState(pseudo !== undefined ? true : false);
  const [endpoint, setEndpoint] = useState(!isLogged ? HOME_REPOS_URL : PROFIL_HOME.replace('{username}', pseudo));

  const handleClickLogin = async (e, tokenKey) => {
    try {
      e.preventDefault();

      const res = await login(tokenKey);

      setIsLogged(true);
      setPseudo(res.login);
      setEndpoint(PROFIL_HOME.replace('{username}', res.login));
    } catch (e) {
      console.error(e);

      setIsLogged(false);
    }
  };

  const handleClickLogout = () => {
    localStorage.clear('tokenKey');
    setPseudo('');
    setIsLogged(false);
    setEndpoint(HOME_REPOS_URL);
  };

  const mainContainerClasses = 'flex flex-col items-center';

  return (
    <div className="body-container">
      <Router>
        <Navbar />
        <div className={`${mainContainerClasses}`}>
          <Switch>
            <Route exact path="/">
              <Home isLogged={isLogged} handleClickLogin={handleClickLogin} endpoint={endpoint} />
            </Route>
            <Route path="/profile" component={Profile} />
            <Route path="/profile-repos" component={ProfileRepos} />
            <Route path="/toolbox" component={Toolbox} />
            <Route path="/repo" component={Repo} />
          </Switch>
        </div>
      </Router>
      <Footer handleClickLogout={handleClickLogout} isLogged={isLogged} />
    </div>
  );
}

export default App;
