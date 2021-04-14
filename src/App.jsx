import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileRepos from './components/ProfileRepos/ProfileRepos';
import Toolbox from './components/Toolbox/Toolbox';
import Repo from './components/Repo/Repo';
import axios from 'axios';

function App() {
  const [homeRepo, setHomeRepo] = useState([]);

  useEffect(() => {
    const getHomeRepo = () => {
      axios
        .get('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=20')

        .then((res) => {
          setHomeRepo(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getHomeRepo();
  }, []);

  console.log(homeRepo);

  const [online, setOnline] = useState(false);
  const logIn = (value) => {
    setOnline(true);
    localStorage.setItem('tokenKey', value);
    console.log(value);
  };
  const logOut = () => {
    setOnline(false);
    localStorage.clear('tokenKey');
  };

  return (
    <div className="body-container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home logIn={logIn} onLine={online} />
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/profile-repos" component={ProfileRepos} />
          <Route path="/toolbox" component={Toolbox} />
          <Route path="/repo" component={Repo} />
        </Switch>
        <Footer logOut={logOut} noLogOut={online} />
      </Router>
    </div>
  );
}

export default App;
