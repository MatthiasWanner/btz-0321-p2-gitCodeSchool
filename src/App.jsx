import React, {useState} from 'react';
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
  const [online, setOnline] = useState(false);
  const logIn = () => {
    setOnline(true)
  }
  const logOut = () => {
    setOnline(false)
  }
  return (
    <div className="body-container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home logIn={logIn} />
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/profile-repos" component={ProfileRepos} />
          <Route path="/toolbox" component={Toolbox} />
          <Route path="/repo" component={Repo} />
        </Switch>
        <Footer logOut={logOut}/>
      </Router>
    </div>
  );
}

export default App;
