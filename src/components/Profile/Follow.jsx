import React from 'react';
import {FOLLOWER_URL} from '../../api/endpoints';
import {useGetAll} from '../../api/useGet';
import './Profile.css'

import { Link } from 'react-router-dom';


export default function Follow({pseudo}){


    const endpoint = FOLLOWER_URL.replace('{username}', pseudo);
    const follow = useGetAll(endpoint)
    

    return (
        <div className="boxFollower mr-4 mt-8 pl-6  w-64 h-28 overflow-scroll ">
            {follow.datas.map((follower)=>{
                return (
                    <Link key={follower.id} to={`/Profile/${follower.login}`}>
                    <div className="flex items-center">
                    <img className="h-4 rounded-full " src={follower.avatar_url} alt=""/> 
                    <p className="text-white ml-2">{follower.login}</p>
                    </div>
                  </Link>
                )
            })}
        
        </div>
    )
}