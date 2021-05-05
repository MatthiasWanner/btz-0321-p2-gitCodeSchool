import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';
import { ArrowCircleDownIcon } from '@heroicons/react/solid';
import 'tailwindcss/tailwind.css';
import logo from '../../img/logo.svg';
import Form from '../Form/Form';

function Banner({ handleClickLogin }) {
  const headerClasses = 'w-full';
  const headerClassesMd = 'md:h-screen md:grid md:grid-cols-2 md:grid-rows-header';
  const titleContainerClasses = 'flex justify-center items-end h-33v w-full text-center';
  const titleContainerClassesMd = 'md:items-center md:col-span-2';
  const homeTitleClasses = 'text-white text-4xl md:text-6xl md:mt-12';
  const spanClasses = 'text-gold-dark';
  const logoContainerClasses = 'flex flex-col items-center justify-around w-full h-50v';
  const arrowContainer = 'flex flex-col items-center w-full text-gold-dark';
  const arrowContainerMd = 'md:order-4 md:col-span-2 md:justify-center';
  const formContainerClasses = 'flex flex-col justify-around items-center w-full h-screen';
  const formContainerClassesMd = 'md:w-full md:order-3 md:h-full';
  const arrowFormContainer = 'md:hidden';

  return (
    <header className={`home-header ${headerClasses} ${headerClassesMd}`}>
      <div className={`title-container ${titleContainerClasses} ${titleContainerClassesMd}`}>
        <h2 className={homeTitleClasses}>
          Bienvenue sur <span className={spanClasses}>GitCodeSchool</span>
        </h2>
      </div>
      <div className={`logo-container ${logoContainerClasses}`}>
        <img className="w-2/3 max-h-1/2 md:w-1/2" src={logo} alt="Git Code School logo" />
      </div>
      <div className={`arrow-container ${arrowContainer} ${arrowContainerMd}`}>
        <p>{`Défiles si t'en veux plus`}</p>
        <ArrowCircleDownIcon className="w-1/12 md:w-10" />
      </div>
      <div id="home-form" className={`home-login-form-container ${formContainerClasses} ${formContainerClassesMd}`}>
        <Form page="home" handleClickLogin={handleClickLogin} />
        <div className={`arrow-form-container ${arrowContainer} ${arrowFormContainer} `}>
          <p>{`Ou commence à visiter`}</p>
          <ArrowCircleDownIcon className="w-1/12 md:w-10" />
        </div>
      </div>
    </header>
  );
}
Banner.propTypes = {
  handleClickLogin: PropTypes.func,
};

export default Banner;
