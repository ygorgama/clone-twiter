import { MenuItem } from "./MeunItem";
import React, { useState } from "react";
import { Button } from "./Button";
import { ProfileItems } from "./Profile";

export interface SideBarProps {
  isDark: boolean;
  isZero: boolean;
}

export function SideBar(props: SideBarProps) {
  const position = props.isZero ? "bottom-0" : "bottom-20";
  return (
    <div className="fixed h-screen">
      <MenuItem.icon isDark={props.isDark} src="twiter" alt="Twiiter" />
      <MenuItem.root
        href="/home"
        src="home"
        children={
          <React.Fragment>
            <MenuItem.link children="Home" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        src="explore"
        href="/404"
        children={
          <React.Fragment>
            <MenuItem.link children="Explore" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        src="notification"
        href="/404"
        children={
          <React.Fragment>
            <MenuItem.link children="Notifications" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        href="/404"
        src="messages"
        children={
          <React.Fragment>
            <MenuItem.link children="Messages" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        href="/404"
        src="bookmark"
        children={
          <React.Fragment>
            <MenuItem.link children="Bookmarks" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        href="/404"
        src="list"
        children={
          <React.Fragment>
            <MenuItem.link children="Lists" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        href="/profile"
        src="/profile"
        children={
          <React.Fragment>
            <MenuItem.link children="Profile" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        href="/404"
        src="more"
        children={
          <React.Fragment>
            <MenuItem.link children="More" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />
      <Button
        children="Tweet"
        size="md"
        isPrimary={true}
        className="w-72 mt-4"
        isLink={true}
        to="/404"
      />

      <div className={`absolute ${position}`}>
        <ProfileItems.root
          isDark={props.isDark}
          children={
            <React.Fragment>
              <ProfileItems.content
                src="../../src/assets/Profile Picture.svg"
                name="Davide Biscuso"
                userName="@biscuttu"
              />
              <ProfileItems.icon isDark={props.isDark} />
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
}
