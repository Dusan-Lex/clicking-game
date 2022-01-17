import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

export interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modalbox}>
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.querySelector("#overlays") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.querySelector("#overlays") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default Modal;
