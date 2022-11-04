import { TabbarItem, TabbarItemProps } from "./TabbarItem";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import "../styles/global.css";

export default {
  title: "Components/TabbarItem",
  component: TabbarItem,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/Home",
    },
  },
  args: {
    to: "/",
    isActivate: true,
    children: "Tweets",
  },
} as Meta<TabbarItemProps>;

export const Default: StoryObj = {};
