import { Meta, StoryObj } from "@storybook/react";
import { SideBar, SideBarProps } from "./SideBar";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/SideBar",
  component: SideBar,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  args: {
    isDark: false,
    isZero: false,
  },
} as Meta<SideBarProps>;

export const Default: StoryObj = {};

export const DarkMode: StoryObj = {
  args: {
    isDark: true,
  },
};
