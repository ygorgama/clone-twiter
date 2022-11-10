import { SideBar } from "./SideBar";
import clsx from "clsx";
import { NewsItems } from "./News";
import React, { useContext, useEffect, useState } from "react";
import { TweetInfo } from "./Tweet";
import { HeaderContainer } from "./Header";
import { Spacer } from "./Spacer";
import { SearchContainer } from "./SearchBar";
import { Follow } from "./Follow";
import { Tabbar } from "./Tabbar";
import { ProfileTop } from "./ProfileTop";
import { darkContext } from "../store/store-context";
import { Tweet } from "./Home";
import { Route, Router, Routes } from "react-router-dom";

export function ProfilePage() {
  const { isDark, arrayTweets } = useContext(darkContext);

  return (
    <div
      className={clsx(" grid grid-cols-3", {
        "bg-dark-1": isDark,
      })}
    >
      <div className="w-full pl-20 h-full">
        <SideBar isDark={isDark} isZero={true} />
      </div>
      <div className="w-full h-full border-x-1 border-dark-7">
        <div className="w-full mb-3">
          <HeaderContainer isDark={isDark} twetts="9" isHome={false} />
        </div>
        <ProfileTop
          isDark={isDark}
          avatar="../../src/assets/Profile Picture.svg"
          name="Davide Biscuso"
          username="biscuttu"
          workArea="Product Designer"
        />
        <Tabbar isActive={true} isDark={false} />
        <Spacer isDark={false} />
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
          id="aloha"
          isDark={isDark}
          content=""
          time="23s"
          userName="@biscuttu"
          name="Davide Biscuso"
          imageSrc="../src/assets/Placehpolder.png"
          src="../../src/assets/Profile Picture.svg"
          key="aloha"
        />
        <TweetInfo
          id="aloha2"
          isDark={isDark}
          content=""
          time="23s"
          userName="@biscuttu"
          name="Davide Biscuso"
          imageSrc="../src/assets/Placehpolder.png"
          src="../../src/assets/Profile Picture.svg"
          key="aloha2"
        />
      </div>
      <div className="pt-2 pl-8 w-full ">
        <SearchContainer isDark={isDark} />
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
      </div>
    </div>
  );
}
