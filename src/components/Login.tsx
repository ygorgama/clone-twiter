import { FormEvent, useState } from "react";
import { MenuItem } from "./MeunItem";

export const Login = () => {
  const [enteredPassword, setEntredPassword] = useState<string>("");
  const [enteredUsername, setEntredUsername] = useState<string>("");

  const submitLoginHandller = (event: FormEvent) => {};
  return (
    <div>
      <form className="text-black  w-100" action="" method="post">
        <MenuItem.icon src="twiter" alt="Twiiter" />
        <h1 className="text-login font-bold">Log in to Twitter</h1>
        <div className="mb-4">
          <input
            min={2}
            className="outline-none text-dark-6 w-100 text-login-input py-5 rounded-md border-dark-7  border"
            placeholder="Phone number, email address"
            type="text"
            name="user"
            id="user"
          />
        </div>
        <div>
          <input
            min={2}
            className="outline-none text-dark-6 w-100 text-login-input py-5 rounded-md border-dark-7  border"
            placeholder="Phone number, email address"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div></div>
      </form>
    </div>
  );
};
