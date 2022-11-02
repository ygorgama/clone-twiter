import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./Button";

import "../styles/global.css";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    size: "lg",
    children: "Tweet",
    isPrimary: true,
  },
} as Meta<ButtonProps>;

export const Default: StoryObj = {};

export const Medium: StoryObj = {
  args: {
    size: "md",
    isPrinmary: true,
  },
};

export const MediumSecondary: StoryObj = {
  args: {
    size: "md",
    isPrimary: false,
  },
};

export const Small: StoryObj = {
  args: {
    size: "sm",
    isPrimary: true,
  },
};

export const SmallSencondary: StoryObj = {
  args: {
    size: "sm",
    isPrimary: false,
  },
};
