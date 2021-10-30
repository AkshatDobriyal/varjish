import React from "react";
import {useHistory} from "react-router-dom";
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (



        <Router >


          <Switch>
            <Route exact path="/"  component={''}/>
            <Route exact path="/Notebooks"  component={''}/>
            <Route exact path="/Notes"  component={''}/>
            <Route exact path="/Notebooks/newNotebook" component={''}/>



          </Switch>


        </Router>

  );
}

export default App;
