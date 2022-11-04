import clsx from "clsx";
import { NavLink } from "react-router-dom";

export interface TabbarItemProps {
  children: string;
  to: string;
  isActivate: boolean;
  className?: string;
}

export function TabbarItem(props: TabbarItemProps) {
  const classNavLink = props.className ? props.className : "text-white";
  return (
    <div
      className={clsx(
        " border-solid w-32 text-center",
        { "border-white border-b-1": !props.isActivate },
        { "border-b-primary-blue border-b-2": props.isActivate }
      )}
    >
      <NavLink
        className={(navData) => {
          return (
            `${classNavLink}  text-sm font-bold block mb-2` +
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
