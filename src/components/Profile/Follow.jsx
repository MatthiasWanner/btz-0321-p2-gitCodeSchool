import React from 'react';
import PropTypes from 'prop-types';
import { FOLLOWERS_URL } from '../../api/endpoints';
import { useGetAll } from '../../api/useGet';
import './Profile.css';

import { Link } from 'react-router-dom';

export default function Follow({ username }) {
  const endpoint = FOLLOWERS_URL.replace('{username}', username);
  const follow = useGetAll(endpoint);

  return (
    <div className="mt-8 w-64 h-28 overflow-auto ">
      {follow.datas.map((follower) => {
        return (
          <Link key={follower.id} to={`/Profile/${follower.login}`}>
            <div className="flex items-center">
              <img className="h-4 rounded-full " src={follower.avatar_url} alt="" />
              <p className="text-white ml-2">{follower.login}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
Follow.propTypes = {
  username: PropTypes.string,
};
