import React, { FormEvent, useContext, useState } from "react";
import { Button } from "./Button";
import { MenuItem } from "./MeunItem";
import { darkContext } from "../store/dark-context";
import { Modal } from "./Modal";
import { NavLink, useNavigate } from "react-router-dom";

interface LoginProps {
  onRegisterActivate: () => void;
}

export const Login = (props: LoginProps) => {
  const [enteredPassword, setEntredPassword] = useState<string>("");
  const [enteredUsername, setEntredUsername] = useState<string>("");
  const [isError, setIsErro] = useState<boolean>(false);
  const navigate = useNavigate();

  const { isLogedIn, onChangeLogin } = useContext(darkContext);

  const submitLoginHandller = (event: FormEvent) => {
    event.preventDefault();
    if (enteredUsername === "" || enteredPassword === "") {
      setIsErro(true);
      return;
    } else if (
      enteredUsername !== "admin@admin.com" ||
      enteredPassword !== "admin"
    ) {
      setIsErro(true);
      return;
    }

    setEntredPassword("");
    setEntredUsername("");
    onChangeLogin();
    navigate("/home");
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntredUsername(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntredPassword(event.target.value);
  };
  return (
    <div className="">
      <form
        className="text-black "
        action=""
        method="post"
        onSubmit={submitLoginHandller}
      >
        <MenuItem.icon src="twiter" alt="Twiiter" />
        <h1 className="text-login font-bold">Log in to Twitter</h1>
        <div className="mb-4">
          <input
            min={2}
            className="outline-none text-dark-6 w-full text-login-input py-5 rounded-md border-dark-7  border"
            placeholder="Phone number, email address"
            type="text"
            name="user"
            id="user"
            onChange={onChangeUsername}
          />
        </div>
        <div className="mb-4">
          <input
            min={2}
            className="outline-none text-dark-6 w-full text-login-input py-5 rounded-md border-dark-7  border"
            placeholder="Phone number, email address"
            type="password"
            name="password"
            id="password"
            onChange={onChangePassword}
          />
        </div>
        <div>
          <Button children="Login" size="md" isPrimary={true} isLink={false} />
        </div>
      </form>
      <div className="flex justify-between text-primary-blue mt-4">
        <NavLink to="./404" className="text-sm ">
          Forgot password?
        </NavLink>
        <button onClick={props.onRegisterActivate}>Sign up to Twitter</button>
      </div>
    </div>
  );
};

// export const backdropt() => {

// }

const RedirectLogin = () => {
  return (
    <React.Fragment>
      <h1 className="text-black font-bold text-login">Usuário não logado</h1>
      <Button
        children="Ir para página de login"
        isLink={true}
        size="md"
        to="/login"
        isPrimary={true}
        className="w-72"
      />
    </React.Fragment>
  );
};

export const LoginModal = () => {
  return <Modal formChildren={<RedirectLogin />} />;
};
