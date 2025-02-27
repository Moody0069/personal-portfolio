import { HashRouter as Router, Route } from "react-router-dom";

import Feeling from "../redux-feeling/Feeling/Feeling";
import Understanding from "../redux-feeling/Understanding/Understanding";
import Support from "../redux-feeling/Support/Support";
import Comments from "../redux-feeling/Comments/Comments";
import Review from "../redux-feeling/Review/Review";
import SubmitSuccess from "../redux-feeling/SubmitSuccess/SubmitSuccess";
import { Link } from "react-router-dom";
import Admin from "../redux-feeling/Admin/Admin";
import "./ReduxFeeling.css";
import Header from "../Header/Header";

export default function ReduxFeeling() {
  return (
    <Router>
      <Route exact path="/feedback">
      <Header />
        <div className="feedbackHeader"></div>
        <div className="feedbackApp">
          <header className="feedbackApp-header">
            <h1 className="feedbackApp-title">Feedback!</h1>
            <Link to={"/feedback/admin"}>
              <h4>Admin page</h4>
            </Link>
          </header>
        </div>

        <Route exact path="/feedback">
          <Feeling />
        </Route>

        <Route exact path="/feedback/understanding">
          <Understanding />
        </Route>

        <Route exact path="/feedback/support">
          <Support />
        </Route>

        <Route exact path="/feedback/comments">
          <Comments />
        </Route>

        <Route exact path="/feedback/review">
          <Review />
        </Route>

        <Route exact path="/feedback/submit-success">
          <SubmitSuccess />
        </Route>

        <Route exact path="/feedback/admin">
          <Admin />
        </Route>
      </Route>
    </Router>
  );
} //end ReduxFeeling
