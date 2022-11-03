import clsx from "clsx";
import { Button } from "./Button";

export interface ProfilePageProps {
  avatar: string;
  name: string;
  username: string;
  workArea: string;
  isDark: boolean;
}

export function ProfilePage(props: ProfilePageProps) {
  return (
    <div
      className={clsx(
        { "text-black": !props.isDark },
        { "text-white": props.isDark }
      )}
    >
      <div className="w-full">
        <img
          className="w-full h-72"
          src="../../src/assets/imagem-profile.png"
          alt="Imagem de fundo"
        />
      </div>
      <div>
        <div className="flex justify-between mt-4">
          <div className="relative left-2 -top-40 ">
            <img
              className="w-56 rounded-full border-4 border-black border-solid"
              src={props.avatar}
              alt="Avatar"
            />
            <div>
              <h3 className="text-xlg">{props.name}</h3>
              <p className="text-sm">@{props.username}</p>
              <p className="text-sm">{props.workArea}</p>
              <div
                className={clsx(
                  "flex",
                  { "text-dark-5": !props.isDark },
                  { "text-dark-6": props.isDark }
                )}
              >
                <div className="flex">
                  <span className="mr-2">
                    <img src="../../src/assets/location.svg" alt="location" />{" "}
                  </span>
                  <span>London</span>
                </div>
                <div className="flex">
                  <span className="mr-2">
                    <img src="../../src/assets/calendar.svg" alt="Calendar" />
                  </span>
                  <span>Joined September 2011</span>
                </div>
              </div>
              <div>
                <span className="font-bold">569</span>
                <span
                  className={clsx(
                    { "text-dark-5": !props.isDark },
                    { "text-dark-6": props.isDark }
                  )}
                >
                  Following
                </span>
                <span className="font-bold">72</span>
                <span
                  className={clsx(
                    { "text-dark-5": !props.isDark },
                    { "text-dark-6": props.isDark }
                  )}
                >
                  Followers
                </span>
              </div>
            </div>
          </div>

          <div>
            <Button
              className="w-40 relative"
              children="Edit Profile"
              size="md"
              isPrimary={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
