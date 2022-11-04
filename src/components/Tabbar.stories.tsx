import { Meta, StoryObj } from "@storybook/react";
import { Tabbar, TabbarProps } from "./Tabbar";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/Tabbar",
  component: Tabbar,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/profile",
    },
  },
  args: {
    isDark: false,
    isActive: true,
  },
} as Meta<TabbarProps>;

export const Default: StoryObj = {};

export const DarkMode: StoryObj = {
  args: {
    isDark: true,
  },
};
