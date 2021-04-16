import { AUTH_URL } from './endpoints'
import axios from 'axios';

const API_URL =  'https://api.github.com';

export async function login(tokenKey){
    const config = {headers: {Authorization: `token ${tokenKey}`}};
    const {data} = await axios.get(`${API_URL}${AUTH_URL}`, config);
    const pseudo = data.login;
    localStorage.setItem('ghPseudo', pseudo)
    localStorage.setItem('ghTokenKey', tokenKey)

    return data;
}

export default API_URL