import React, { useContext, createContext } from "react";

export interface DarkContext {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const darkContext = createContext<DarkContext>({
  isDark: false,
  setIsDark: () => {},
});
