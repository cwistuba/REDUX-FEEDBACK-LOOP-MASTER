import React, { Component } from "react";

import { connect } from "react-redux";

class SupportedPage extends Component {
  state = {
    supportScore: "",
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
  onSupportClick = (event) => {
    console.log(this.state);
    this.props.dispatch({ type: "SET_SUPPORT_SCORE", payload: this.state });
    this.props.history.push("/comments");
  };

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <input
          type="number"
          min="1"
          max="10"
          onChange={this.onInputChange("supportScore")}
        />
        <p>(on a scale of 1 to 10)</p>
        <button onClick={this.onSupportClick}>NEXT</button>
      </div>
    );
  }
}

export default connect()(SupportedPage);
