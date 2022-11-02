import { clsx } from "clsx";
import { NavLink } from "react-router-dom";

export interface ButtonProps {
  size: "sm" | "md" | "lg";
  children: string;
  isPrimary: boolean;
  method?: () => void;
  className?: string;
  isLink?: boolean;
  to?: string;
}

export function Button({
  size = "lg",
  isPrimary = true,
  children,
  method,
  className,
  isLink = false,
  to,
}: ButtonProps) {
  const Comp = isLink ? NavLink : "button";
  const direct = to ? to : "";
  return (
    <Comp
      to={direct}
      onClick={method}
      className={clsx(
        `block text-center rounded-full text-md ${
          className ? className : "w-full"
        }  font-bold`,
        {
          "bg-primary-blue text-white": isPrimary,
          "bg-transparente  border-1 border-primary-blue text-primary-blue":
            !isPrimary,
        },
        {
          "py-6": size == "lg",
          "py-4": size == "md",
          "py-1": size == "sm",
        }
      )}
    >
      {children}
    </Comp>
  );
}
