import React from "react"
import {Switch,Route,Link} from "react-router-dom"
import Login from "./Panel/Login/login"
import Dashboard from "./Panel/DashBoard/Main"

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/dashboard">
      <Dashboard/>
      </Route>
      <Route path="/">
        <div>HomePage</div>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </Route>
    </Switch>
  );
}

export default App;
