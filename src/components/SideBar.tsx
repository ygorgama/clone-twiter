import { MenuItem } from "./MeunItem";
import React, { useState } from "react";
import { Button } from "./Button";
import { ProfileItems} from "./Profile";


export interface SideBarProps {
  isDark: boolean;
}

export function SideBar(props: SideBarProps) {



  return (
    <div className="h-full ">
      <MenuItem.icon isDark={props.isDark} src="twiter" alt="Twiiter"/>
      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} isSelected={true} src='home' alt="Home" />
            <MenuItem.link  children="Home" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="explore" alt="Home" />
            <MenuItem.link children="Explore" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="notification" alt="Home" />
            <MenuItem.link children="Notifications" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="messages" alt="Home" />
            <MenuItem.link children="Messages" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="bookmark" alt="Home" />
            <MenuItem.link children="Bookmarks" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="list" alt="Home" />
            <MenuItem.link children="Lists" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="profile" alt="Home" />
            <MenuItem.link children="Profile" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />

      <MenuItem.root
        children={
          <React.Fragment>
            <MenuItem.icon isDark={props.isDark} src="more" alt="Home" />
            <MenuItem.link children="More" href="/" />
          </React.Fragment>
        }
        isDark={props.isDark}
      />
      <Button children="Tweet" size="md" isPrimary={true} className="w-72 mt-4"/>

      <div className="mt-36">
        <ProfileItems.root isDark={props.isDark}  children={(
          <React.Fragment>
            <ProfileItems.content src="../../src/assets/Profile Picture.svg" name="Davide Biscuso" userName="@biscuttu"/>
            <ProfileItems.icon isDark={props.isDark}/>
          </React.Fragment>
        )}/>
      </div>
    </div>
  );
}
