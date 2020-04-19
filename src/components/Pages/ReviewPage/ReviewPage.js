import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class ReviewPage extends Component {
  submitResults = (event) => {
    const results = {
      feeling: this.props.store.feelingReducer.feelingScore,
      understanding: this.props.store.understandReducer.understandScore,
      support: this.props.store.supportedReducer.supportScore,
      comments: this.props.store.commentsReducer.inputComment,
    };

    axios
      .post("/results", results)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/thankyou");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Review Page</h1>
        <br />
        <div>
          <h4>
            **Feelings**<p></p>
            {this.props.store.feelingReducer.feelingScore}
          </h4>
        </div>
        <div>
          <h4>
            **Understanding**<p></p>
            {this.props.store.understandReducer.understandScore}
          </h4>
        </div>
        <div>
          <h4>
            **Support**<p></p>
            {this.props.store.supportedReducer.supportScore}
          </h4>
        </div>
        <div>
          <h4>
            **Comments**<p></p>
            {this.props.store.commentsReducer.inputComment}
          </h4>
        </div>
        <button onClick={this.submitResults}>SUBMIT</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewPage);
