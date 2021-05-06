import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  const hour = (date.getHours() - 2).toString().length < 2 ? `0${date.getHours() - 2}` : date.getHours() - 2;
  const mn = date.getMinutes().toString().length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${day}/${month}/${year} à ${hour}h${mn}`;
}

function Feed({ result }) {
  const feedContainer =
    'flex justify-evenly items-center rounded-2xl text-white w-full bg-repos-dark hover:bg-repos-hover border border-gold-dark mb-5 shadow-homeItem';
  const feedContainerMd = 'md:w-3/5 md:h-feed';

  return (
    <>
      <p className="flex items-center text-white mx-5 my-3 md:mb-5 font-title">Le {changeDateFormat(result.created_at)}</p>
      <div className={`feed-box ${feedContainer} ${feedContainerMd}`}>
      <hr className="md:w-5 md:border-gold-dark" />
        <img src={result.actor.avatar_url} alt={`${result.actor.login} avatar`} className="w-1/12 md:w-24 md:p-1 rounded-full" />
        <hr className="md:w-5 md:border-gold-dark md:px-0" />
        <div>
          <p className="font-title">
            {result.actor.login} {events[result.type]} :
          </p>
          <Link to={`/repo/${result.repo.name}`} className="w-full text-gold-dark hover:text-gold-hover">
            {result.repo.name}
          </Link>
        </div>
      </div>
      <div style={{ height: 1 }} className="border-b border-gold-dark" />
    </>
  );
}

Feed.propTypes = {
  result: PropTypes.object,
};

export default Feed;
