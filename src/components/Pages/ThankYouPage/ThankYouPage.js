import React, { Component } from "react";

class ThankYouPage extends Component {
  returnHome = (event) => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <div>
          <button onClick={this.returnHome}>Leave New Feedback</button>
        </div>
      </div>
    );
  }
}

export default ThankYouPage;
