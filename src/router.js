import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './admin/admin';
import Shared from './shared/shared';


export default function Router() {
    return (
        <Switch>
            <Route exact path="/404" >
                Not Found
            </Route>
            <Route path="/admin" >
                <Admin />
            </Route>
            <Route path="/" >
                <Shared />
            </Route> 
        </Switch>
    )
}