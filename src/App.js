import React from "react";
import {useHistory} from "react-router-dom";
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from "./Components/Login/SignIn/SignIn";
import TraineeInfo from "./Components/Trainer/TraineeInfo";
import SearchGym from "./Components/searchGym/SearchGym";
import DashboardCard from "./Components/Trainee-dashboard/dashboard_card";
import Navbar from "./Components/navbar/Navbar";
import SignUp from "./Components/Login/SignUp/SignUp";
import {AppProvider} from "./Context/AppContext";

function App() {
  return (
      <AppProvider>


        <Router >

          <Navbar />
          <Switch>
            <Route exact path="/"  component={SignIn}/>
            <Route exact path="/signUp"  component={SignUp}/>
            <Route exact path="/searchGym"  component={SearchGym}/>
            <Route exact path="/dashboard"  component={DashboardCard}/>
            <Route exact path='/trainee/info' component={TraineeInfo}/>
            <Route exact path="/Notes"  component={''}/>
            <Route exact path="/Notebooks/newNotebook" component={''}/>



          </Switch>


        </Router>
      </AppProvider>
  );
}

export default App;
