import React from 'react';
import './Home.css';
import Form from '../../components/Form/Form'

function Home() {
  return (
    <>
      <div className="baner">
      <h3>Welcome to Git Code School</h3>
      <img src="#" alt="#"/> 
      {/* logo */}
      <div className="scrollMore">
        <p>Défile si tu en veux plus</p>
        <img src="#" alt=""/>
        {/* Fleche */}
      </div>
      </div>
      <div className="backBottom">
        <Form />
      </div>
    </>
  );
}

export default Home;
