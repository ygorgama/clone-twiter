import { ProfileTop, ProfilePageProps } from "./ProfileTop";
import { Meta, StoryObj } from "@storybook/react";

import "../styles/global.css";

export default {
  title: "Components/ProfileTop",
  component: ProfileTop,
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
