import React from "react";
import {useHistory} from "react-router-dom";
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from "./Components/Login/SignIn/SignIn";
import SearchGym from "./Components/searchGym/SearchGym";


function App() {
  return (



        <Router >


          <Switch>
            <Route exact path="/"  component={SignIn}/>
            <Route exact path="/searchGym"  component={SearchGym}/>
            <Route exact path="/Notes"  component={''}/>
            <Route exact path="/Notebooks/newNotebook" component={''}/>



          </Switch>


        </Router>

  );
}

export default App;
