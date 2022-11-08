import { clsx } from "clsx";
import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { Tweet } from "./Home";
import { Axios } from "axios";

export interface PostProps {
  onChangeArray?: () => void;
  src: string;
  isDark: boolean;
}

export interface PostIconsProps {
  src: string;
  type?: string;
  className?: string;
  functionHandller?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface tweet {
  text: string;
  image?: string;
}

export function Post(props: PostProps) {
  const [enteredInput, setEnteredInput] = useState<string>("");
  //State do arquvio
  const [enteredUrlImage, setEnteredUrlImage] = useState<string>();
  const inputHandller = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredInput(event.target.value);
  };

  //Setando o state do arquivo
  const imageHandlle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target) {
          const readerTarget = e.target;
          const result = readerTarget.result;

          setEnteredUrlImage(result?.toString());
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const submitHandller = (event: FormEvent) => {
    event.preventDefault();

    if (enteredInput.length > 1 && enteredInput.length <= 350) {
      let object: Tweet;

      //Casa o arquivo for diferente de unefined cria um formData
      if (enteredUrlImage) {
        object = {
          text: enteredInput,
          key: Math.round(Math.random() * 100),
          image: enteredUrlImage,
        };
      } else {
        object = {
          text: enteredInput,
          key: Math.round(Math.random() * 100),
        };
      }

      const localStorageItem = localStorage.getItem("posts");

      //Ver se a localStorage já tem um array
      if (localStorageItem) {
        const oldLocalStorageArray = JSON.parse(localStorageItem);
        const newArray = [object, ...oldLocalStorageArray];
        localStorage.setItem("posts", JSON.stringify(newArray));
      } else {
        const newArray = [object];
        localStorage.setItem("posts", JSON.stringify(newArray));
      }

      setEnteredUrlImage("");
    }
  };

  return (
    <form onSubmit={submitHandller}>
      <div className="flex items-center ">
        <label className="mr-6" htmlFor="">
          <Avatar size="md" src={props.src} />
        </label>
        <textarea
          maxLength={350}
          minLength={1}
          onChange={inputHandller}
          id="inputThink"
          placeholder="What’s happening?"
          className={clsx(
            "text-md font-bold justify-between w-full bg-transparente mt-5 outline-none",
            {
              "text-dark-5": !props.isDark,
              "text-dark-6": props.isDark,
            }
          )}
        ></textarea>
      </div>
      {enteredUrlImage && <img src={enteredUrlImage} alt="Preview" />}
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
        <Button
          className={`w-24`}
          children="Tweet"
          isPrimary={true}
          size="md"
          isLink={false}
        />
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
