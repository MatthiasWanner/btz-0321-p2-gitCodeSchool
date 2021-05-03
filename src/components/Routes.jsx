import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import AllRepos from './AllRepos/AllRepos';
import Repo from './Repo/Repo';
import Chat from './Chat/Chat';

function Routes({ isLogged, handleClickLogin, username }) {
  return (
    <>
      <Route exact path="/">
        <Home isLogged={isLogged} handleClickLogin={handleClickLogin} username={username} />
      </Route>
      <Route path="/profile/:username" component={Profile} />
      <Route path="/repo/:username/:repo" component={Repo} />
      <Route path="/repos/:username" component={AllRepos} />
      <Route exact path="/chat">
        <Chat username={username} />
      </Route>
    </>
  );
}

Routes.propTypes = {
  isLogged: PropTypes.bool,
  handleClickLogin: PropTypes.func,
  username: PropTypes.string,
};

export default Routes;
