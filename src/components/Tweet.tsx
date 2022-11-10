import { clsx } from "clsx";
import { ButtonIcons } from "./Post";
import { Avatar } from "./Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface TweetProps {
  src: string;
  name: string;
  userName: string;
  isDark: boolean;
  time: string;
  id: string;
  content: string;
  imageSrc?: string;
}

export interface TweetIconsProps {
  functionHandller?: () => void;
  alt: string;
  src: string;
}

const Icons = (props: TweetIconsProps) => {
  return (
    <button
      type="button"
      onClick={props.functionHandller}
      className={`h-14 mr-6`}
    >
      <img src={`../../src/assets/${props.src}.svg`} alt={props.alt} />
    </button>
  );
};

export function TweetInfo(props: TweetProps) {
  const [likesCount, setLikesCount] = useState<number>(0);
  const [likeShow, setLikeShow] = useState<string>("not-liked");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const countHandller = () => {
    if (isClicked) {
      setLikesCount((prevState) => prevState - 1);
      setLikeShow("not-liked");
    } else {
      setLikesCount((prevState) => prevState + 1);
      setLikeShow("like");
    }
    setIsClicked((prevState) => !prevState);
  };
  return (
    <div
      className={clsx("font-medium text-xs border-t-1 border-solid mb-4", {
        "text-black border-dark-7": !props.isDark,
        "text-white border-dark-4": props.isDark,
      })}
    >
      <div className="flex items-center mt-1">
        <div className="flex relative top-2">
          <Avatar size="sm" src={props.src} />
        </div>
        <div className="ml-5">
          <span className=" font-bold mr-2">{props.name}</span>
          <span className="text-dark-6 mr-2">{props.userName}</span>
          <span className="text-dark-6">{props.time}</span>
        </div>
      </div>
      <div className="mt-5">
        <div>
          {props.content.length <= 280 && <p>{props.content}</p>}
          {props.imageSrc && <img src={props.imageSrc} alt={props.imageSrc} />}
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <Icons alt="Like" src="comment" />
            <span>61</span>
          </div>

          <div className="flex items-center mr-6 ">
            <Icons alt="Like" src="retweet" />
            <span>12</span>
          </div>
          <div className="flex items-center mr-6">
            <Icons functionHandller={countHandller} alt="Like" src={likeShow} />
            <span>{likesCount}</span>
          </div>

          <div className="flex items-center">
            <Icons alt="Like" src="share" />
            <span>62</span>
          </div>
        </div>
        <Link className="text-primary-blue" to={`/profile/${props.id}`}>
          Show this thread
        </Link>
      </div>
    </div>
  );
}
