import React from "react";
import {useHistory} from "react-router-dom";
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from "./Components/Login/SignIn/SignIn";
import TraineeInfo from "./Components/Trainer/TraineeInfo";


function App() {
  return (



        <Router >


          <Switch>
            <Route exact path="/"  component={SignIn}/>
            <Route exact path="/trainee/info"  component={TraineeInfo}/>
            <Route exact path="/Notes"  component={''}/>
            <Route exact path="/Notebooks/newNotebook" component={''}/>



          </Switch>


        </Router>

  );
}

export default App;
