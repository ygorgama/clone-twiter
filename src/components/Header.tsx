import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { NavLink } from "react-router-dom";
import { darkContext } from "../store/dark-context";
import { useContext } from "react";

export interface HeaderContainerProps {
  isDark: boolean;
  isHome: boolean;
  twetts: string;
}

export interface HeaderProfileProps {
  twetts: string;
}

export interface HeaderHomeProps {}

export interface ImageProps {
  isHome: boolean;
  to?: string;
}

export function HeaderContainer(props: HeaderContainerProps) {
  return (
    <div
      className={clsx(
        "flex text-md font-bold w-full  border-b-1 border-dark-6",
        {
          "text-black": !props.isDark,
          "text-white": props.isDark,
        }
      )}
    >
      {props.isHome ? <HeaderHome /> : <HeaderProfile twetts={props.twetts} />}
    </div>
  );
}

function Symbol(props: ImageProps) {
  const image = props.isHome ? "change-mode.svg" : "setinha.svg";
  const { setIsDark } = useContext(darkContext);
  const Comp = props.isHome ? "button" : NavLink;

  return (
    <Slot className="w-9 h-14">
      <Comp to="/" onClick={setIsDark}>
        <img src={`../../src/assets/${image}`} alt="Simbolo" />
      </Comp>
    </Slot>
  );
}

function HeaderProfile(props: HeaderProfileProps) {
  return (
    <div className="flex items-center ml-8">
      <div className="mr-8">
        <Symbol isHome={false} />
      </div>
      <div>
        <p className="text-md">Name</p>
        <div className="flex text-dark-6 text-xls">
          <p className="mr-2">{props.twetts}</p>
          <p>Tweets</p>
        </div>
      </div>
    </div>
  );
}

function HeaderHome(props: HeaderHomeProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <p className="text-md">Home</p>
      </div>
      <div>
        <Symbol isHome={true} />
      </div>
    </div>
  );
}
