import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import RepoHome from '../RepoHome/RepoHome';
import Feed from '../Feed/Feed';
import Spinner from '../Spinner/Spinner';
import { HOME_REPOS_URL, EVENTS_URL } from '../../api/endpoints';
import { useGetAll } from '../../api/useGet';

function Home({ isLogged, handleClickLogin, pseudo }) {
  const homeContent = pseudo ? useGetAll(EVENTS_URL.replace('{username}', pseudo)) : useGetAll(HOME_REPOS_URL);
  const mainContainerClasses = 'w-full p-2 flex flex-col justify-center items-center';

  if (isLogged) {
    return (
      <>
        <div className={`${mainContainerClasses}`}>
          <h2 className="text-3xl text-repos-dark text-center">Bienvenue</h2>
          <h3 className="text-2xl text-repos-dark mb-10 text-center">{pseudo}</h3>
          <p className="text-repos-dark">{`Ce qu'il s'est passé autour de vous :`}</p>
          <section className="home-repos">
            {homeContent.isLoading && <Spinner />}
            {!homeContent.isLoading && homeContent.datas.map((field) => <Feed key={field.id} result={field} />)}
          </section>
        </div>
      </>
    );
  }
  if (!isLogged) {
    return (
      <>
        <Banner handleClickLogin={handleClickLogin} />
        <div className={`home-main-container ${mainContainerClasses}`}>
          <section className="home-repos">
            {homeContent.isRepoHomeLoading && <Spinner />}
            {!homeContent.isRepoHomeLoading && homeContent.datas.map((repo) => <RepoHome key={repo.id} result={repo} isLogged={isLogged} />)}
          </section>
        </div>
      </>
    );
  }
}

export default Home;
