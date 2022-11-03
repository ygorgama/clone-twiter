import { ProfilePage, ProfilePageProps } from "./ProfilePage";
import { Meta, StoryObj } from "@storybook/react";

import "../styles/global.css";

export default {
  title: "Components/ProfilePage",
  component: ProfilePage,
  args: {
    avatar: "../../src/assets/Profile Picture.svg",
    isDark: false,
    name: "Davide Biscuso",
    username: "biscuttu",
    workArea: "Product Designer",
  },
} as Meta<ProfilePageProps>;

export const Default: StoryObj = {};

export const DarkMode: StoryObj = {
  args: {
    isDark: true,
  },
};
