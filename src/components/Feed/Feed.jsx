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

function changeDateFormat(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().length < 2 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours() - 2;
  const mn = date.getMinutes();
  return `${day}/${month}/${year} à ${hour}h${mn}`;
}

function Feed({ result }) {
  const feedContainer = 'rounded-2xl w-full bg-repos-dark border mb-5 shadow-lg';

  return (
    <div className={`${feedContainer}`}>
      <p>Le {changeDateFormat(result.created_at)}</p>
      <p>
        {result.actor.login} {events[result.type]} :
      </p>
      <p>{result.repo.name}</p>
    </div>
  );
}

Feed.propTypes = {
  result: PropTypes.object,
};

export default Feed;
