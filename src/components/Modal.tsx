import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

export interface BackdropProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Backdrop = ({ onClick }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

export interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export interface ModalProps {
  children: ReactNode;
  onHideCart: React.MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ children, onHideCart }: ModalProps) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onHideCart} />,
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
