import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileRepos from './components/ProfileRepos/ProfileRepos';
import Toolbox from './components/Toolbox/Toolbox';
import Repo from './components/Repo/Repo';

function App() {
  const pseudo = 'Best Team';
  return (
    <div className="body-container">
      <Router>
        <Navbar pseudo={pseudo} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile/:pseudo" component={Profile} />
          <Route path="/profile-repos/:pseudo" component={ProfileRepos} />
          <Route path="/toolbox" component={Toolbox} />
          <Route path="/repo" component={Repo} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
