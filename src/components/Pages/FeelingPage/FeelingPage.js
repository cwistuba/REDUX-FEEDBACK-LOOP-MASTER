import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  state = {
    feelingScore: "",
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
  onFeelingClick = (event) => {
    console.log(this.state);
    this.props.dispatch({ type: "SET_FEELING_SCORE", payload: this.state });
    this.props.history.push("/understand");
  };

  render() {
    return (
      <div>
        <h2>How are you feeling?</h2>
        <input
          type="number"
          min="1"
          max="10"
          onChange={this.onInputChange("feelingScore")}
        />
        <p>(on a scale of 1 to 10)</p>
        <button onClick={this.onFeelingClick}>NEXT</button>
      </div>
    );
  }
}

export default connect()(FeelingPage);
