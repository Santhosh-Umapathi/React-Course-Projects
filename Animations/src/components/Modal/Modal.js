import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const modal = props => {
  // const cssClasses = [
  //   "Modal",
  //   props.show === "entering"
  //     ? "ModalOpen"
  //     : props.show === "exiting" ? "ModalClosed" : null
  // ];

  const animationTimeout = {
    enter: 400,
    exit: 1000
  }

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTimeout}
      mountOnEnter
      unmountOnExit
      onEnter={() => console.log("Enter")}
      onEntering={() => console.log("Entering")}
      onEntered={() => console.log("Entered")}
      onExit={() => console.log("Exit")}
      onExiting={() => console.log("Exiting")}
      onExited={() => console.log("Exited")}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive:"ModalClosed"
      }}//"fade-slide"
      >
          
          <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        </CSSTransition>
    
  );
};

export default modal;
