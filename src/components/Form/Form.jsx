import React, { useState } from 'react';
import './Form.css';

function Form({ logIn }) {
  const [inputToken, setInputToken] = useState('');

  return (
    <div>
      <h3>Se connecter</h3>
      <img src="" alt="" />
      {/* // logo git */}
      <label htmlFor="Account">Clé token</label>
      <input className="inputToken" type="text" value={inputToken} onChange={(e) => setInputToken(e.target.value)} />
      <button onClick={() => logIn(inputToken)} className="btnLogin" type="submit">
        Go
      </button>
    </div>
  );
}

export default Form;
