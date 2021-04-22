import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import RepoHome from '../HomeLogoutRepos/HomeLogoutRepos';
import Feed from '../Feed/Feed';
import Spinner from '../Spinner/Spinner';
import { useGetAll } from '../../api/useGet';

function Home({ isLogged, handleClickLogin, endpoint, modal }) {
  const homeContent = useGetAll(endpoint);
  const pseudo = localStorage.ghPseudo;

  const mainContainerClasses = 'w-full p-2 flex flex-col justify-center items-center';

  if (isLogged) {
    return (
      <>
        <div className={`${mainContainerClasses}`}>
          <h2 className="text-3xl text-repos-dark text-center">Mes Repos</h2>
          <h3 className="text-2xl text-repos-dark mb-10 text-center">{pseudo}</h3>
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
