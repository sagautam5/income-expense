import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";

export default () => (
  <BrowserRouter>
      <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/home" exact component={Home}/>
      </Switch>
  </BrowserRouter>
);