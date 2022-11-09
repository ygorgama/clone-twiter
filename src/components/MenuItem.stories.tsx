import { MenuItem, MenuItemConteinerProps } from "./MeunItem";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import "../styles/global.css";
import React from "react";

export default {
  title: "Components/MenuItem",
  component: MenuItem.root,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  args: {
    src: "home",
    isDark: false,
    href: "/home",
    children: (
      <React.Fragment>
        <MenuItem.link children="Home" />
      </React.Fragment>
    ),
  },
} as Meta<MenuItemConteinerProps>;

export const Default: StoryObj = {};

export const DarkMode: StoryObj = {
  args: {
    isDark: true,
    children: (
      <React.Fragment>
        <MenuItem.link children="Home" />
      </React.Fragment>
    ),
  },
};

export const Selected: StoryObj = {
  parameters: {
    reactRouter: {
      routePath: "/home",
    },
  },
  args: {
    isDark: false,
    isSelected: true,

    children: (
      <React.Fragment>
        <MenuItem.link children="Home" />
      </React.Fragment>
    ),
  },
};
