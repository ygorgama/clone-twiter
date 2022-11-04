import clsx from "clsx";
import { NavLink } from "react-router-dom";

export interface TabbarItemProps {
  children: string;
  to: string;
  isActivate: boolean;
  isTabbar?: boolean;
  isDark?: boolean;
}

export function TabbarItem(props: TabbarItemProps) {
  return (
    <div
      className={clsx(
        " border-solid w-32 text-center",
        { "text-white": !props.isTabbar },
        { "text-dark-5": props.isTabbar && !props.isDark },
        { "text-dark-6": props.isTabbar && props.isDark },
        { "border-white border-b-1": !props.isActivate },
        { "border-b-primary-blue border-b-2": props.isActivate }
      )}
    >
      <NavLink
        className={(navData) => {
          return (
            `$text-sm font-bold block mb-2` +
            (navData.isActive ? " text-primary-blue" : "")
          );
        }}
        to={props.to}
      >
        {props.children}
      </NavLink>
    </div>
  );
}
