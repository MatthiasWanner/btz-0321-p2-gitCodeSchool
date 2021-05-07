/* eslint-disable jsx-a11y/no-onchange */
import { FolderIcon, StarIcon, LockClosedIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { PROFIL_REPOS, USER_REPOS_URL } from '../../api/endpoints';
import { useGetAll } from '../../api/useGet';
import './AllRepos.css';

export default function AllRepos() {
  const { username } = useParams();
  const endpoint = username !== localStorage.ghUsername ? PROFIL_REPOS.replace(`{username}`, username) : USER_REPOS_URL;
  const allRepos = useGetAll(endpoint);

  const [changeLang, setChangeLang] = useState('');
  const [languages, setLanguages] = useState([]);

  const haveTheColor = (language) => {
    switch (language) {
      case 'JavaScript':
        return 'bg-yellow-200';
      case 'HTML':
        return 'bg-red-700';
      case 'CSS':
        return 'bg-purple-700';
      case 'Vue':
        return 'bg-green-900';
      case 'PHP':
        return 'bg-blue-900';
      default:
        return 'bg-green-200';
    }
  };

  function handleChange(e) {
    e.preventDefault();
    setChangeLang(e.target.value);
  }

  useEffect(() => {
    const reducedLanguages = allRepos.datas.reduce((acc, curr) => {
      const cache = [...acc];
      if (cache.includes(curr.language) || !curr.language) {
        return cache;
      } else {
        cache.push(curr.language);
        return cache;
      }
    }, []);
    setLanguages(reducedLanguages);
  }, [allRepos.datas]);

  return (
    <>
      <div className="mb-5 mt-14 ">
        <div className="demo-1 mt-2">
          <h1 className="text-gold-dark flex justify-center md:text-3xl mt-10 md:mt-0 text-xl mb-10 border-b border-gold-dark"> Les Repos de {`${username}`} </h1>
        </div>
        <div className="flex flex-row items-baseline">
          <p className="text-white mt-2 px-3">Language: </p>
          <select
            onChange={handleChange}
            value={changeLang}
            name="language"
            id="language-selection"
            className="text-gray-900 border rounded-full text-center">
            <option value="">--Sélection du language-</option>
            {languages.map((language, i) => {
              return (
                <option key={i} value={language}>
                  {language}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {allRepos.datas
        .filter((repo) => {
          if (changeLang === '') {
            return true;
          } else {
            return repo.language === changeLang;
          }
        })
        .map((repo) => {
          return (
            <Link className="w-full md:w-2/4" key={repo.id} to={`/repo/${username}/${repo.name}`}>
              <div className="border border-gold-dark bg-homeGray-dark  rounded-xl mx-8 my-5">
                <div className="text-white flex pl-6 pt-2 items-center justify-between text-center md:text-xl flex">
                  <FolderIcon className="h-6 w-6 md:h-20 text-gold-dark md:w-20 flex-shrink-0 " />
                  <p className="text-white md:text-2xl text-lg ">{repo.name}</p>
                  <div className="flex justify-around items-center mr-4">
                    <p className="text-white text-xs md:text-md px-2">{repo.stargazers_count}</p>
                    <StarIcon className="md:h-6 h-3 text-gold-dark" />
                  </div>
                </div>
                <div className="border 1px border-gold-dark w-2/4 mx-auto mb-4"></div>
                <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white md:text-md text-sm my-2 pl-6">Description: </h1>
                  <p className="text-white md:text-sm text-xs mb-2 pl-6 pr-4">{repo.description}</p>
                </div>
                <p className="text-white text-xs   mr-5 flex items-center justify-end">
                  <span className={`${haveTheColor(repo.language)} w-4 h-4 rounded-full mx-3`} />
                  {repo.language}
                </p>
              </div>
              </div>
              <div className="border 1px border-gold-dark w-1/4 mx-auto"></div>
            </Link>
          );
        })}
    </>
  );
}
