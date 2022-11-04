import clsx from "clsx";
import { TabbarItem } from "./TabbarItem";

export interface TabbarProps {
  isDark: boolean;
  isActive: boolean;
}

export function Tabbar(props: TabbarProps) {
  return (
    <div className="flex">
      <TabbarItem
        to="/profile"
        children="Tweets"
        isDark={props.isDark}
        isTabbar={true}
        isActivate={props.isActive}
      />
      <TabbarItem
        to="/404"
        children="Tweets & replies"
        isActivate={false}
        isDark={props.isDark}
        isTabbar={true}
      />
      <TabbarItem
        to="/404"
        children="Media"
        isDark={props.isDark}
        isTabbar={true}
        isActivate={false}
      />
      <TabbarItem
        to="/404"
        children="Likes"
        isDark={props.isDark}
        isTabbar={true}
        isActivate={false}
      />
    </div>
  );
}
