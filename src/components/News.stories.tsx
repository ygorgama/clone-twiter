import { NewsItems, ContainerProps } from "./News";
import { Meta, StoryObj } from "@storybook/react";

import "../styles/global.css";
import React from "react";

export default {
  title: "Components/News",
  component: NewsItems.root,
  args: {
    isDark: false,
    nome: "What’s happening",
    children: (
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
    ),
  },
} as Meta<ContainerProps>;

export const Default: StoryObj = {};

export const DarkMode: StoryObj = {
  args: {
    isDark: true,
  },
};
