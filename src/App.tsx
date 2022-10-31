import "./styles/global.css";
import { SideBar } from "./components/SideBar";
import { HeaderContainer } from "./components/Header";
import { Post } from "./components/Post";
import { Spacer } from "./components/Spacer";
import { SearchContainer } from "./components/SearchBar";
import { NewsItems } from "./components/News";
import React, { Dispatch, useState } from "react";
import { Follow } from "./components/Follow";
import clsx from "clsx";
import { TweetInfo } from "./components/Tweet";

interface darkMode {
  isDark: boolean;
}

export interface Tweet {
  text: string;
  data: FormData;
  key: number;
  image?: string;
}

function App() {
  const [arrayTwitte, setArrayTwitte] = useState<Tweet[]>([]);

  const [darkMode, setDarkMode] = useState<darkMode>({
    isDark: false,
  });

  const darkModeChange = () => {
    setDarkMode((prevState) => ({
      isDark: !prevState.isDark,
    }));
  };

  const TweetHandler = (newTweet: Tweet): void => {
    for (const item of arrayTwitte) {
      if (item.key == newTweet.key) {
        newTweet.key = item.key++;
      }
    }
    console.log(newTweet);

    setArrayTwitte((prevState) => [newTweet, ...prevState]);
  };

  return (
    <div
      className={clsx("App grid grid-cols-3", {
        "bg-dark-1": darkMode.isDark,
      })}
    >
      <div className="w-full pl-20 h-full">
        <SideBar isDark={darkMode.isDark} />
      </div>
      <div className="w-full h-full">
        <div className="w-full">
          <HeaderContainer
            functionHandller={darkModeChange}
            isDark={darkMode.isDark}
            twetts="9"
            isHome={true}
          />
        </div>
        <Post
          changeArray={TweetHandler}
          isDark={darkMode.isDark}
          src="../../src/assets/Profile Picture.svg"
        />
        <Spacer isDark={darkMode.isDark} />
        {arrayTwitte.map((item) => (
          <TweetInfo
            isDark={darkMode.isDark}
            content={item.text}
            time="23s"
            userName="@biscuttu"
            name="Davide Biscuso"
            imageSrc={item.image}
            src="../../src/assets/Profile Picture.svg"
            key={item.key}
          />
        ))}
      </div>
      <div className="pt-2 pl-8 w-full">
        <SearchContainer isDark={darkMode.isDark} />
        <div className="mt-5">
          <NewsItems.root
            isDark={darkMode.isDark}
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
            isDark={darkMode.isDark}
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

export { App };
