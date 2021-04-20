import React from 'react';
import PropTypes from 'prop-types';

import './Feed.css';

const events = {
  CreateEvent: 'a créé',
  WatchEvent: 'a mis une étoile sur',
  CommitCommentEvent: 'a commenté un commit',
  DeleteEvent: 'a supprimé',
  ForkEvent: 'a forké',
  GollumEvent: 'a créé une page wiki',
  IssueCommentEvent: 'a commenté une issue',
  IssuesEvent: 'a truc une issue',
  MemberEvent: 'a modifié les collaborateurs',
  PublicEvent: 'a rendu public',
  PullRequestEvent: 'a fait une Pull Request',
  PullRequestReviewEvent: 'a relu une Pull Request',
  PullRequestReviewCommentEvent: 'a commenté une relecture de Pull Request',
  ReleaseEvent: 'a modifié/créé une Release',
  PushEvent: 'a push',
  SponsorshipEvent: 'a sponsorisé',
};

function Feed({ result }) {
  const feedContainer = 'rounded-2xl w-full bg-repos-dark border mb-5 shadow-lg';
  const buttonRepoClasses = 'text-white rounded w-1/4 border-b-4 border-l-2 shadow-lg bg-gold-dark border-gold-hover hover:bg-gold-hover';

  return (
    <div className={`${feedContainer}`}>
      <p>Le {result.created_at}</p>
      <p>
        {result.actor.login} {events[result.type]} :
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
