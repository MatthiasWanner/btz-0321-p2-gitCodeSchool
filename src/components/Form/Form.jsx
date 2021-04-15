import React from 'react';
import 'tailwindcss/tailwind.css';
import './Form.css';
import HomeFields from './HomeFields';

function Form({ page, handleClickLogin }) {
  const homeLoginForm = 'bg-homeGray-dark flex flex-col items-center justify-around w-11/12 h-1/3 border border-black rounded-xl shadow-md';

  if (page === 'home') {
    return (
      <form className={`${homeLoginForm}`}>
        <HomeFields handleClickLogin={handleClickLogin} />
      </form>
    );
  }
}

export default Form;
