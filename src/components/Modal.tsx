import { ReactNode } from "react";
import { createPortal } from "react-dom";
import React from "react";

export interface BackdropProps {
  children: ReactNode;
  isRegister?: boolean;
}

export interface ModaProps {
  formChildren: ReactNode;
}

const Backdrop = () => {
  return (
    <div className="fixed top-1 left-0 w-full h-screen z-20 bg-dark-bacdrop"></div>
  );
};

const ModalOverlay = (props: BackdropProps) => {
  return (
    <div className="fixed top-52 left-1/3 w-100 rounded-md h-100 z-30 bg-white flex flex-col items-center justify-center">
      {props.children}
    </div>
  );
};

export const Modal = (props: ModaProps) => {
  const portal = document.getElementById("login") as HTMLElement;
  return (
    <React.Fragment>
      {createPortal(<Backdrop />, portal)}
      {createPortal(<ModalOverlay children={props.formChildren} />, portal)}
    </React.Fragment>
  );
};
