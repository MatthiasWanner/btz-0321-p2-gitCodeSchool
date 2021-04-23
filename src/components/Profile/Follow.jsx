import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FOLLOWER_URL} from '../../api/endpoints'
import API_URL from '../../api/api'
import { Link } from 'react-router-dom';


export default function Follow({pseudo}){

    const [follow, setFollow]=useState([])

    

    useEffect(()=>{
        axios
        .get(`${API_URL}${FOLLOWER_URL.replace("{username}", pseudo)}`)
        .then((res)=>{
            setFollow(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[pseudo])

    return (
        <div className="border 2px border-white">
            {follow.map((follower)=>{
                return (
                    <Link key={follower.id} to={`/Profile/${follower.login}`}>
                    <div>
                    <p className="text-white">{follower.login}</p>
                    </div>
                  </Link>
                )
            })}
        
        </div>
    )
}