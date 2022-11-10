import { SideBar } from "./SideBar";
import { HeaderContainer } from "./Header";
import { Post } from "./Post";
import { Spacer } from "./Spacer";
import { SearchContainer } from "./SearchBar";
import { NewsItems } from "./News";
import React, { useContext, useEffect, useState } from "react";
import { Follow } from "./Follow";
import clsx from "clsx";
import { TweetInfo } from "./Tweet";
import { useLocation } from "react-router-dom";
import { darkContext } from "../store/store-context";

export interface Tweet {
  text: string;
  key: string;
  image?: string;
}

export function Home() {
  const { isDark, arrayTweets, onLocalStorage } = useContext(darkContext);

  useEffect(() => {
    onLocalStorage();
  }, [arrayTweets, onLocalStorage]);
  return (
    <div
      className={clsx(" grid grid-cols-3", {
        "bg-dark-1": isDark,
      })}
    >
      <div className="w-full pl-20 h-full">
        <SideBar isZero={false} isDark={isDark} />
      </div>
      <div className="w-full h-full border-x-1 border-dark-7 px-5">
        <div className="w-full">
          <HeaderContainer isDark={isDark} twetts="9" isHome={true} />
        </div>
        <Post isDark={isDark} src="../../src/assets/Profile Picture.svg" />
        <Spacer isDark={isDark} />
        {arrayTweets.map((item) => (
          <TweetInfo
            isDark={isDark}
            content={item.text}
            time="23s"
            userName="@biscuttu"
            name="Davide Biscuso"
            src="../../src/assets/Profile Picture.svg"
            key={item.key}
            imageSrc={item.image}
            id={item.key}
          />
        ))}
        <TweetInfo
          isDark={isDark}
          content=""
          time="23s"
          userName="@biscuttu"
          name="Davide Biscuso"
          imageSrc="../src/assets/Placehpolder.png"
          src="../../src/assets/Profile Picture.svg"
          key="aloha2"
          id="aloha2"
        />
        <TweetInfo
          isDark={isDark}
          content=""
          time="23s"
          userName="@biscuttu"
          name="Davide Biscuso"
          imageSrc="../src/assets/Placehpolder.png"
          src="../../src/assets/Profile Picture.svg"
          key="aloha"
          id="aloha"
        />
      </div>
      <div className="pt-2 pl-8 w-full ">
        <SearchContainer isDark={isDark} />
        <div className="mt-5">
          <NewsItems.root
            isDark={isDark}
            nome="What’s happening"
            children={
              <React.Fragment>
                <NewsItems.news
                  imagem="../../src/assets/imagem-news-3.png"
                  tempo="Last night"
                  treding="#covid19"
                  texto="England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic"
                  titulo="COVID19"
                />
                <NewsItems.news
                  imagem="../../src/assets/imagem-news-1.png"
                  tempo="4h ago"
                  treding="#trump"
                  texto="Parler may go offline following suspensions by Amazon, Apple and Google"
                  titulo="US news"
                />
                <NewsItems.news
                  imagem="../../src/assets/imagem-news-2.png"
                  tempo="1h ago"
                  treding="#covid19"
                  texto="India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test"
                  titulo="India"
                />
              </React.Fragment>
            }
          />
        </div>

        <div className="mt-5 mb-5">
          <NewsItems.root
            isDark={isDark}
            nome="Who to follow"
            children={
              <React.Fragment>
                <Follow
                  name="Bessie Cooper"
                  src="../../src/assets/bessie.svg"
                  userName="@alessandroveronezi"
                />
                <Follow
                  name="Jenny Wilson"
                  src="../../src/assets/jessie.svg"
                  userName="@gabrielcantarin"
                />
              </React.Fragment>
            }
          />
        </div>
      </div>
    </div>
  );
}
