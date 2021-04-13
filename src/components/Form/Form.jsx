import React from 'react'
import './Form.css'

function Form({logIn}){
    return (
        <div>
        <h3>Se connecter</h3>
        <img src="" alt=""/>
        {/* // logo git */}
        <label htmlFor="Account">Clé token</label>
        <input className="inputToken" type="text"/>
        <button onClick={logIn} className="btnLogin" type="submit">Go</button>
        </div>
    )
};

export default Form;