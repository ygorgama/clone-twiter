import { clsx } from "clsx";
import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import "../../src/styles/Post.module.css";
import { Tweet } from "../App";

export interface PostProps {
  src: string;
  isDark: boolean;
  changeArray: (newTweet: Tweet) => void;
}

export interface PostIconsProps {
  src: string;
  type?: string;
  className?: string;
  functionHandller?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface sendData {
  text: string;
  formData: FormData;
  imagem: string;
}

export interface tweet {
  text: string;
  image?: string;
}

export function Post(props: PostProps) {
  const [enteredInput, setEnteredInput] = useState<string>("");
  const [image, setEnteredImage] = useState<string>("");
  const inputHandller = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredInput(event.target.value);
  };

  const imageHandlle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files) {
      const file = target.files[0];
      setEnteredImage(file.name);
    }
  };

  const submitHandller = (event: FormEvent) => {
    event.preventDefault();

    if (enteredInput.length > 1 && enteredInput.length <= 350) {
      const object: Tweet = {
        text: enteredInput,
        key: Math.round(Math.random() * 100),
        image: "",
      };
      if (image.length > 0) {
        object.image = image;
      }

      props.changeArray(object);
    }
  };
  return (
    <form onSubmit={submitHandller}>
      <div className="flex items-center ">
        <label className="mr-6" htmlFor="">
          <Avatar size="md" src={props.src} />
        </label>
        <textarea
          onChange={inputHandller}
          id="inputThink"
          placeholder="What’s happening?"
          className={clsx(
            "text-md font-bold justify-between w-full bg-transparente mt-5",
            {
              "text-dark-5": !props.isDark,
              "text-dark-6": props.isDark,
            }
          )}
        ></textarea>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex">
          <ButtonIcons src="emoji" />
          <ButtonIcons src="gif" />
          <ButtonIcons
            src="media"
            functionHandller={imageHandlle}
            type="file"
          />
          <ButtonIcons src="poll" />
          <ButtonIcons src="schedule" />
        </div>
        <Button className="w-20" children="Tweet" isPrimary={true} size="md" />
      </div>
    </form>
  );
}

export function ButtonIcons(props: PostIconsProps) {
  const classDefine = !props.className ? "mr-5" : props.className;
  const type = props.type;
  return (
    <label className="mr-4" htmlFor={`input${props.src}`}>
      <img src={`../../src/assets/${props.src}.svg`} alt="Icone" />
      <input
        name={`input${props.src}`}
        id={`input${props.src}`}
        accept="image/*"
        type={type}
        onChange={props.functionHandller}
        className="hidden"
      />
    </label>
  );
}
