import { MenuItem } from "./MeunItem";
import React from "react";
import { Button } from "./Button";

export interface SideBarProps {
  isDark: boolean;
}

export function SideBar(props: SideBarProps) {
  return (
    <div>
      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home" />
            <MenuItem.link children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home" />
            <MenuItem.link children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home" />
            <MenuItem.link children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home" />
            <MenuItem.link children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home" />
            <MenuItem.link children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home" />
            <MenuItem.link children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home" />
            <MenuItem.link children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home" />
            <MenuItem.link children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />
      <Button children="Tweet" size="lg" isPrimary={true} className="w-80 mt-4"/>
    </div>
  );
}
