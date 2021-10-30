import React from "react";
import {useHistory} from "react-router-dom";
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from "./Components/Login/SignIn/SignIn";
import SearchGym from "./Components/searchGym/SearchGym";
import DashboardCard from "./Components/Trainee-dashboard/dashboard_card";
import Navbar from "./Components/navbar/Navbar";


function App() {
  return (



        <Router >

          <Navbar />
          <Switch>
            <Route exact path="/"  component={SignIn}/>
            <Route exact path="/searchGym"  component={SearchGym}/>
            <Route exact path="/dashboard"  component={DashboardCard}/>
            <Route exact path="/Notes"  component={''}/>
            <Route exact path="/Notebooks/newNotebook" component={''}/>



          </Switch>


        </Router>

  );
}

export default App;
