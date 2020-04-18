import React, { Component } from "react";

import { connect } from "react-redux";

class UnderstandPage extends Component {
  onUnderstandingClick = (type) => {
    this.props.history.push("/supported");
  };
  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <input type="number" min="1" max="10" />
        <p>(on a scale of 1 to 10)</p>
        <button onClick={this.onUnderstandingClick}>NEXT</button>
      </div>
    );
  }
}

export default UnderstandPage;
