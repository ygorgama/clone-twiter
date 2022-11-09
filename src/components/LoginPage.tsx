import { useState } from "react";
import { Login } from "./Login";

export const LoginPage = () => {
  const [isRegistred, setIsRegistred] = useState<boolean>(true);
  const registerHandller = () => {
    setIsRegistred((prevState) => !prevState);
  };
  return (
    <main className="flex  w-full  justify-center py-3">
      <Login onRegisterActivate={registerHandller} />
    </main>
  );
};
