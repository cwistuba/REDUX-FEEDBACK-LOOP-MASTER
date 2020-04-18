import React, { Component } from "react";

import { connect } from "react-redux";

class UnderstandPage extends Component {
  state = {
    understandScore: "",
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  onUnderstandClick = (event) => {
    console.log(this.state);
    this.props.dispatch({ type: "SET_UNDERSTAND_SCORE", payload: this.state });
    this.props.history.push("/supported");
  };

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <input
          type="number"
          min="1"
          max="10"
          onChange={this.onInputChange("understandScore")}
        />
        <p>(on a scale of 1 to 10)</p>
        <button onClick={this.onUnderstandClick}>NEXT</button>
      </div>
    );
  }
}

export default connect()(UnderstandPage);
