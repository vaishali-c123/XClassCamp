import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.counter}</p>
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              counter: this.state.counter + 1,
            });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              counter: this.state.counter - 1,
            });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
