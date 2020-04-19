import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import FeelingPage from "../Pages/FeelingPage/FeelingPage";
import UnderstandPage from "../Pages/UnderstandPage/UnderstandPage";
import SupportedPage from "../Pages/SupportedPage/SupportedPage";
import CommentsPage from "../Pages/CommentsPage/CommentsPage";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import ThankYouPage from "../Pages/ThankYouPage/ThankYouPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <Route exact path="/" component={FeelingPage} />
          <Route exact path="/understand" component={UnderstandPage} />
          <Route exact path="/supported" component={SupportedPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/thankyou" component={ThankYouPage} />
        </Router>
      </div>
    );
  }
}

export default App;
