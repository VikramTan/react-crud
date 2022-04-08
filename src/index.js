import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import Home from "./component/home";
import About from "./component/about";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";
import Nav from "./component/layout/navbar";
import AddUser from "./component/users/AddUser";
import EditUser from "./component/users/EditUser";

import UserDetails from "./component/users/user";

ReactDOM.render(
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/users/add"} component={AddUser} />
      <Route path={"/users/edit/:id"} component={EditUser} />
      <Route path={"/users/:id"} component={UserDetails} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
