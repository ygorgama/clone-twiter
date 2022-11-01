import { Button } from "./Button";

export function Footer() {
  return (
    <div className="bg-primary-blue text-white flex justify-evenly py-3 fixed bottom-0 w-full">
      <div>
        <h2 className="font-bold text-xlg">Don't Miss What's Whappening</h2>
        <p className="text-xls">People on Twitter are first to know</p>
      </div>
      <div>
        <Button
          isPrimary={false}
          children="Log in"
          size="md"
          className="bg-white w-20 mr-2"
          method={() => (location.href = "/404")}
        ></Button>
        <Button
          isPrimary={false}
          children="Sign Up"
          size="md"
          className="bg-white w-24"
          method={() => (location.href = "/404")}
        ></Button>
      </div>
    </div>
  );
}
