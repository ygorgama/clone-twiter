import React, { useContext, createContext } from "react";

export interface DarkContext {
  isDark: boolean;
  isLogedIn: boolean;
  setIsDark: () => void;
  onChangeLogin: () => void;
}

export const darkContext = createContext<DarkContext>({
  isDark: false,
  setIsDark: () => {},
  onChangeLogin: () => {},
  isLogedIn: false,
});
