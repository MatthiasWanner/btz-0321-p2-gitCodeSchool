import React from 'react';
import {FOLLOWER_URL} from '../../api/endpoints';
import {useGetAll} from '../../api/useGet';

import { Link } from 'react-router-dom';


export default function Follow({pseudo}){


    const endpoint = FOLLOWER_URL.replace('{username}', pseudo);
    const follow = useGetAll(endpoint)
    

    return (
        <div className="mr-4 mt-8 pl-6">
            {follow.datas.map((follower)=>{
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