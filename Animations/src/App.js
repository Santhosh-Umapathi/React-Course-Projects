import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition, CSSTransition } from "react-transition-group";




class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock:false
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {

    const animationTimeout = {
      enter: 400,
      exit: 1000
    }

    return (
      <div className="App">
        <h1>React Animations</h1>

        <button onClick = {() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br />

        <Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit>
          {
            state => <div style={{
              background: 'red',
              margin: 'auto',
              width: 100,
              height: 100,
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1
            }}></div>
          }

        </Transition>

        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={animationTimeout}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("Enter")}
          onEntering = {() => console.log("Entering")}
          onEntered = {() => console.log("Entered")}
          onExit = {() => console.log("Exit")}
          onExiting = {() => console.log("Exiting")}
          onExited={() => console.log("Exited")}
          

        >
          {
            state => <Modal show={state} closed={this.closeModal}/>
          }

        </Transition> */}


        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>


        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
