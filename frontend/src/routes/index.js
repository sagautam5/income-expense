import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Login from "../components/Login";
import Register from "../components/Register";

export default () => (
  <BrowserRouter>
      <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
      </Switch>
  </BrowserRouter>
);