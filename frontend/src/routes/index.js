import React from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";

const checkAuth = () => {

    const token = localStorage.getItem('token');

    if(!token){
        return false;
    }

    return true;
}


export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    </BrowserRouter>
);