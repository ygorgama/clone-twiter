import { MenuItem, MenuItemConteinerProps } from "./MeunItem";
import { Meta, StoryObj } from "@storybook/react";

import "../styles/global.css";
import React from "react";

export default {
  title: "Components/MenuItem",
  component: MenuItem.root,
  args: {
    isDark: false,
    children: (
      <React.Fragment>
        <MenuItem.icon src="home" alt="Home" />
        <MenuItem.link children="Home" href="/" />
      </React.Fragment>
    ),
  },
} as Meta<MenuItemConteinerProps>;

export const Default: StoryObj = {};

export const DarkMode: StoryObj = {
  args: {
    isDark: false,
    children: (
      <React.Fragment>
        <MenuItem.icon isDark={true} src="home" alt="Home" />
        <MenuItem.link children="Home" href="/" />
      </React.Fragment>
    ),
  },
};

export const Selected: StoryObj = {
  args: {
    isDark: false,
    isSelected: true,
    children: (
      <React.Fragment>
        <MenuItem.icon isSelected={true} src="home" alt="Home" />
        <MenuItem.link children="Home" href="/" />
      </React.Fragment>
    ),
  },
};
