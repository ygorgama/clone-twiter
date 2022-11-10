import React, { useContext, createContext } from "react";
import { Tweet } from "../components/Home";

export interface DarkContext {
  isDark: boolean;
  isLogedIn: boolean;
  setIsDark: () => void;
  onChangeLogin: () => void;
  arrayTweets: Tweet[];
  onLocalStorage: () => void;
}

export const darkContext = createContext<DarkContext>({
  isDark: false,
  setIsDark: () => {},
  onChangeLogin: () => {},
  isLogedIn: false,
  arrayTweets: [],
  onLocalStorage: () => {},
});
