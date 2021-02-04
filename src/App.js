import React from "react";
import "./style.css";
import { history } from "./components/history";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/home";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
