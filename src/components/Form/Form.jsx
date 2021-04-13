import React from 'react'
import './Form.css'

function Form({}){
    return (
        <div>
        <h3>Se connecter</h3>
        <img src="" alt=""/>
        {/* // logo git */}
        <label htmlFor="Account">Clé token</label>
        <input className="inputToken" type="text"/>
        <button type="submit">Go</button>
        </div>
    )
};

export default Form;