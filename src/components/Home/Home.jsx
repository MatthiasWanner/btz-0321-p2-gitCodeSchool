import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import RepoHome from '../RepoHome/RepoHome';
import Spinner from '../Spinner/Spinner';
import { useGetAll } from '../../api/useGet';

function Home({ isLogged, handleClickLogin, endpoint }) {
  const homeRepos = useGetAll(endpoint);
  const pseudo = localStorage.ghPseudo;

  const mainContainerClasses = 'home-main-container w-full p-2';
  const formContainerClasses = 'flex justify-center items-center w-full h-screen';

  if (isLogged) {
    return (
      <>
        <div className={`${mainContainerClasses}`}>
          <h2 className="text-3xl text-repos-dark text-center">Mes Repos</h2>
          <h3 className="text-2xl text-repos-dark mb-10 text-center">{pseudo}</h3>
          <section className="home-repos">
            {homeRepos.isLoading && <Spinner />}
            {!homeRepos.isLoading && homeRepos.datas.map((repo) => <RepoHome key={repo.id} repo={repo} isLogged={isLogged} />)}
          </section>
        </div>
      </>
    );
  }
  if (!isLogged) {
    return (
      <>
        <Banner />
        <div className={`${mainContainerClasses}`}>
          <div className={formContainerClasses}>
            <Form page="home" handleClickLogin={handleClickLogin} />
          </div>
          <section className="home-repos">
            {homeRepos.isLoading && <Spinner />}
            {!homeRepos.isLoading && homeRepos.datas.map((repo) => <RepoHome key={repo.id} repo={repo} isLogged={isLogged} />)}
          </section>
        </div>
      </>
    );
  }
}

export default Home;
