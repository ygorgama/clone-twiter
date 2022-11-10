import { clsx } from "clsx";
import { ReactNode, useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { NavLink, useLocation } from "react-router-dom";

export interface MenuItemConteinerProps {
  children: ReactNode;
  href: string;
  src: string;
  isDark?: boolean;
}

export interface MenuItemProps {
  children: string;
}

export interface MenuIconProps {
  src: string;
  alt: string;
  isDark?: boolean;
  isSelected?: boolean;
}

function MenuItemContainer({
  isDark = false,
  children,
  href,
  src,
}: MenuItemConteinerProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  let retorno: boolean = false;
  return (
    <NavLink
      to={href}
      className={(navData) => {
        return (
          setIsSelected(navData.isActive),
          clsx("flex items-center", {
            "text-primary-blue": navData.isActive,
            "text-black": !navData.isActive && !isDark,
            "text-white": !navData.isActive && isDark,
          })
        );
      }}
    >
      <MenuIcon src={src} isSelected={isSelected} alt="Item" isDark={isDark} />
      {children}
    </NavLink>
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

function MenuItemLink({ children }: MenuItemProps) {
  return <p className="text-md font-bold home__icon">{children}</p>;
}

export const MenuItem = {
  root: MenuItemContainer,
  icon: MenuIcon,
  link: MenuItemLink,
};
