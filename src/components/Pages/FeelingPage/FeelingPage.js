import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  render() {
    return (
      <div>
        <h1>Feeling Page</h1>
      </div>
    );
  }
}

export default connect()(FeelingPage);
