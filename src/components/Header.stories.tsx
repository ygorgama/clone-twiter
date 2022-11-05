import { HeaderContainer, HeaderContainerProps } from "./Header";
import { Meta, StoryObj } from "@storybook/react";
import "../styles/global.css";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/Header",
  component: HeaderContainer,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  args: {
    isDark: false,
    isHome: true,
  },
} as Meta<HeaderContainerProps>;

export const Default: StoryObj = {};

export const Profile: StoryObj = {
  args: {
    isDark: false,
    isHome: false,
  },
};

export const HomeDark: StoryObj = {
  args: {
    isDark: true,
    isHome: true,
    to: "/",
  },
};

export const ProfileDark: StoryObj = {
  args: {
    isDark: true,
    isHome: false,
    to: "/",
  },
};
