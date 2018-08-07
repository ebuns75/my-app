import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello World! To get started, edit <code>src/App.js</code> and save to
          reload.
        </p>
      </div>
    );
  }
}

// export default App;

class Test extends App {
  render() {
    return (
      <div className="Test">
        <h1>This is Erics area</h1>
      </div>
    );
  }
}

export { App, Test };
