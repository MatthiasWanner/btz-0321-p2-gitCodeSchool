import React from 'react';
import './Boxrepo.css';

function Boxrepo({url, userName, repoName, nbStar}){
    return (
        <div className="boxRepo">
            <img src={url} alt={`${userName}image`}/>
            {/* logo */}
            <h2>{userName}</h2>
            <h3>{repoName}</h3>
            <p>A récolté {nbStar}★</p>
        </div>
    )
};


export default Boxrepo;