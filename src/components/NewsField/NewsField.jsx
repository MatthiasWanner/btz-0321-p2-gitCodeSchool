import React from 'react';
import PropTypes from 'prop-types';

import './NewsField.css';

function NewsField({ result }) {
  const NewsFieldContainer = 'rounded-2xl h-24 w-full bg-repos-dark border mb-5 shadow-lg';
  const buttonRepoClasses = 'text-white rounded w-1/4 border-b-4 border-l-2 shadow-lg bg-gold-dark border-gold-hover hover:bg-gold-hover';

  return (
    <div className={`${NewsFieldContainer}`}>
      {result.login}
      <button className={`${buttonRepoClasses}`} />
    </div>
  );
}

NewsField.propTypes = {
  result: PropTypes.object,
  isLogged: PropTypes.bool,
};

export default NewsField;
