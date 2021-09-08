import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './admin/admin';
import Shared from './shared/shared';
import Login from './shared/components/login/login';
import Signup from './shared/components/signup/signup';

export default function Router() {
    return (
        <Switch>
            <Route exact path="/404" >
                Not Found
            </Route>
            <Route path="/admin" >
                <Admin />
            </Route>
            <Route exact path="/login" >
                <Login />
            </Route>
            <Route exact path="/registration" >
                <Signup />
            </Route>
            <Route path="/" >
                <Shared />
            </Route> 
        </Switch>
    )
}