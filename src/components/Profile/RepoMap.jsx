import React, { useEffect, useState } from 'react';
import './Profile.css';
import API_URL from '../../api/api';
import { PROFIL_URL } from '../../api/endpoints';
import { useParams } from 'react-router';
import axios from 'axios';

export default function RepoMap(){
    const[repoMap, setRepoMap]=useState([])
    
    useEffect(()=>{
        axios
        .get(`${API_URL}${PROFIL_URL}/repos`)
        .then((res)=>{
            setRepoMap(res)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div>

        </div>
    )
}