import React from 'react';
import PropTypes from 'prop-types';

import './Feed.css';

function defineAction(eventType) {
  switch (eventType) {
    case 'CreateEvent':
      return 'a créé';
    case 'WatchEvent':
      return 'a mis une étoile';
    case 'CommitCommentEvent':
      return 'a commenté un commit';
    case 'DeleteEvent':
      return 'a supprimé';
    case 'ForkEvent':
      return 'a forké';
    case 'GollumEvent':
      return 'a créé une page wiki'; // actions to determine
    case 'IssueCommentEvent':
      return 'a commenté une issue';
    case 'IssuesEvent':
      return 'a truc une issue'; //actions to determine
    case 'MemberEvent':
      return 'a modifié les collaborateurs'; //actions to determine
    case 'PublicEvent':
      return 'a rendu public';
    case 'PullRequestEvent':
      return 'a fait une Pull Request';
    case 'PullRequestReviewEvent':
      return 'a relu une Pull Request';
    case 'PullRequestReviewCommentEvent':
      return 'a commenté une relecture de Pull Request';
    case 'ReleaseEvent':
      return 'a modifié/créé une Release';
    case 'PushEvent':
      return 'a push';
    case 'SponsorshipEvent':
      return 'a sponsorisé';
  }
}

function Feed({ result }) {
  const feedContainer = 'rounded-2xl w-full bg-repos-dark border mb-5 shadow-lg';
  const buttonRepoClasses = 'text-white rounded w-1/4 border-b-4 border-l-2 shadow-lg bg-gold-dark border-gold-hover hover:bg-gold-hover';

  return (
    <div className={`${feedContainer}`}>
      <p>Le {result.created_at}</p>
      <p>
        {result.actor.login} {defineAction(result.type)} :
      </p>
      <p>{result.repo.name}</p>
      <button className={`${buttonRepoClasses}`} />
    </div>
  );
}

Feed.propTypes = {
  result: PropTypes.object,
};

export default Feed;
