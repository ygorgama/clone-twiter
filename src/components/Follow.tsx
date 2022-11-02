import { clsx } from "clsx";
import React from "react";
import { Button } from "./Button";
import { ProfileItems } from "./Profile";

export interface FolowProps {
  name: string;
  userName: string;
  src: string;
}

export function Follow(props: FolowProps) {
  return (
    <div className="border-y border-solid border-dark-7 font-medium flex py-3 justify-between items-center">
      <ProfileItems.content
        IsMedium={true}
        name={props.name}
        userName={props.userName}
        src={props.src}
      />
      <Button isPrimary={false} children="Follow" size="sm" className="w-20" />
    </div>
  );
}
