import { clsx } from "clsx";
import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { NavLink } from "react-router-dom";

export interface MenuItemConteinerProps {
  children: ReactNode;
  isSelected?: boolean;
  isDark?: boolean;
}

export interface MenuItemProps {
  children: string;
  href: string;
}

export interface MenuIconProps {
  src: string;
  alt: string;
  isDark?: boolean;
  isSelected?: boolean;
}

function MenuItemContainer({
  isSelected = false,
  isDark = false,
  children,
}: MenuItemConteinerProps) {
  return (
    <div
      className={clsx("flex items-center", {
        "text-primary-blue": isSelected,
        "text-black": !isSelected && !isDark,
        "text-white": !isSelected && isDark,
      })}
    >
      {children}
    </div>
  );
}

function MenuIcon(props: MenuIconProps) {
  let src: string = props.src;

  if (props.isDark && !props.isSelected) {
    src = src + "-dark";
  } else if (props.isSelected) {
    src = src + "-select";
  }

  return (
    <Slot className="w-9 h-14 mr-5">
      <img src={`../../src/assets/${src}.svg`} alt={props.alt} />
    </Slot>
  );
}

function MenuItemLink({ children, href }: MenuItemProps) {
  return (
    <NavLink className="text-md font-bold home__icon" to={href}>
      {children}
    </NavLink>
  );
}

export const MenuItem = {
  root: MenuItemContainer,
  icon: MenuIcon,
  link: MenuItemLink,
};
