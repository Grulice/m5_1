import React, { Component } from "react";

class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.location.state);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.refreshBalance();
          }}
        >
          Set Balance to 100000
        </button>
      </div>
    );
  }
}

export default Sell;
