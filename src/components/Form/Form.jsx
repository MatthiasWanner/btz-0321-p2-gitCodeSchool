import React from 'react';
import './Form.css';
import HomeFields from './HomeFields';

function Form({ page, handleClickLogin }) {
  const homeLoginForm = 'bg-homeGray-dark flex flex-col items-center justify-around w-11/12 h-1/3 border border-black rounded-xl shadow-md';
  const homeLoginFormMd = 'md:w-3/4 md:h-1/2';

  if (page === 'home') {
    return (
      <form className={`${homeLoginForm} ${homeLoginFormMd}`}>
        <HomeFields handleClickLogin={handleClickLogin} />
      </form>
    );
  }
}

export default Form;
