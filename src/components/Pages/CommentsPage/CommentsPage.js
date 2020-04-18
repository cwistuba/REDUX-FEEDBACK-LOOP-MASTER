import React, { Component } from "react";
import { connect } from "react-redux";

class CommentsPage extends Component {
  state = {
    inputComment: "",
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
  onCommentClick = (event) => {
    console.log(this.state);
    this.props.dispatch({ type: "SET_COMMENT_INPUT", payload: this.state });
    this.props.history.push("/Review");
  };

  render() {
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <input type="text" onChange={this.onInputChange("inputComment")} />
        <p>(Comments, Concerns, Suggestions?)</p>
        <button onClick={this.onCommentClick}>NEXT</button>
      </div>
    );
  }
}

export default connect()(CommentsPage);
