import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import HomePopularElement from '../HomePopularElement/HomePopularElement';
import Feed from '../Feed/Feed';
import Spinner from '../Spinner/Spinner';
import { useGetAll } from '../../api/useGet';
import { HOME_REPOS_URL, EVENTS_URL } from '../../api/endpoints';

function Home({ isLogged, handleClickLogin, username }) {
  const homeContent = username ? useGetAll(EVENTS_URL.replace('{username}', username)) : useGetAll(HOME_REPOS_URL);

  const mainContainerClasses = 'w-full p-2 flex flex-col justify-center items-center';
  const ItemsContainer = 'w-full flex flex-col items-center md:w-3/4';
  const homeItemContainer = 'flex flex-col w-11/12 h-15 md:h-32';
  const homeItemContainerMd = 'md:flex-row md:w-full';
  const homeFeedContainerMd = 'md:justify-center';

  const haveAlignment = (number) => {
    if (number % 2 !== 0) {
      return 'md:flex-row-reverse';
    } else {
      return 'md:flex-row';
    }
  };

  if (isLogged) {
    return (
      <>
        <div className={`${mainContainerClasses}`}>
          <h2 className="text-3xl text-gold-dark border-b border-gold-dark md:mt-10 mt-24 text-center">Bienvenue</h2>
          <header className="mt-14 w-full">
            <h3 className="text-2xl text-white mb-10 text-center">{username}</h3>
          </header>
          <div className="border 1px border-gold-dark w-1/4 mx-auto mb-10 "></div>
          <section className={`home-items-container ${ItemsContainer}`}>
            {homeContent.isLoading && <Spinner />}
            {!homeContent.isLoading &&
              homeContent.datas.map((feed, index) => {
                return (
                  <div className={`home-feed-container ${homeItemContainer} ${homeFeedContainerMd} ${haveAlignment(index)}`} key={feed.id}>
                    <Feed result={feed} />
                  </div>
                );
              })}
          </section>
          <div className="border 1px border-gold-dark w-1/4 mx-auto mt-10 "></div>
        </div>
      </>
    );
  }
  if (!isLogged) {
    return (
      <>
        <Banner handleClickLogin={handleClickLogin} />
        <div className={`home-main-container ${mainContainerClasses}`}>
          <h3 className="title font-bold text-3xl text-gold-dark py-4 my-10 md:text-5xl border-b border-gold-dark mb-20">Les populaires</h3>
          <section className={`home-items-container ${ItemsContainer}`}>
            {homeContent.isLoading && <Spinner />}
            {!homeContent.isLoading &&
              homeContent.datas.map((repo, index) => {
                return (
                  <div className={`home-repo-container ${homeItemContainer} ${homeItemContainerMd} ${haveAlignment(index)}`} key={repo.id}>
                    <HomePopularElement result={repo} index={index} />
                  </div>
                );
              })}
          </section>
        </div>
      </>
    );
  }
}

export default Home;
