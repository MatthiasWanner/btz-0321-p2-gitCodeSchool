import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';
import 'tailwindcss/tailwind.css';
import logo from '../../img/logo.svg';
import Form from '../Form/Form';

function Banner({ handleClickLogin }) {
  const headerClasses = 'w-screen md:h-screen md:flex';
  const bannerClasses = 'flex flex-col items-center h-screen w-screen text-center';
  const bannerClassesMd = 'md:w-1/2';
  const titleContainerClasses = 'flex justify-center items-end h-1/3 w-full';
  const titleContainerClassesMd = 'md:items-center';
  const homeTitleClasses = 'text-white text-4xl';
  const spanClasses = 'text-gold-dark';
  const logoContainerClasses = 'flex flex-col items-center justify-center w-full h-2/3';
  const imgClasses = 'w-2/3 max-h-1/2';
  const formContainerClasses = 'flex justify-center items-center w-full h-screen';
  const formContainerClassesMd = 'md:w-1/2';

  return (
    <header className={`home-header ${headerClasses}`}>
      <div className={`banner ${bannerClasses} ${bannerClassesMd}`}>
        <div className={`${titleContainerClasses} ${titleContainerClassesMd}`}>
          <h2 className={homeTitleClasses}>
            Bienvenue sur <span className={spanClasses}>GitCodeSchool</span>
          </h2>
        </div>
        <div className={logoContainerClasses}>
          <img className={imgClasses} src={logo} alt="Git Code School logo" />
        </div>
      </div>
      <div className={`home-login-form-container ${formContainerClasses} ${formContainerClassesMd}`}>
        <Form page="home" handleClickLogin={handleClickLogin} />
      </div>
    </header>
  );
}
Banner.propTypes = {
  handleClickLogin: PropTypes.func,
};

export default Banner;
