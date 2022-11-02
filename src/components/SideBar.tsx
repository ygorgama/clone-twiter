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
        children={
          <React.Fragment>
            <MenuItem.icon
              isDark={props.isDark}
              isSelected={true}
              src="home"
              alt="Home"
            />
            <MenuItem.link children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="explore" alt="Home" />
            <MenuItem.link children="Explore" href="/404" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon
              isDark={props.isDark}
              src="notification"
              alt="Home"
            />
            <MenuItem.link children="Notifications" href="/404" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="messages" alt="Home" />
            <MenuItem.link children="Messages" href="/404" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="bookmark" alt="Home" />
            <MenuItem.link children="Bookmarks" href="/404" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="list" alt="Home" />
            <MenuItem.link children="Lists" href="/404" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="profile" alt="Home" />
            <MenuItem.link children="Profile" href="/profile" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="more" alt="Home" />
            <MenuItem.link children="More" href="/404" />
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
