import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Dashboard from './components/dashboard/dashboard';
import Categories from './components/categories/categories';
import Products from './components/products/products';
import Orders from './components/orders/orders';
import Login from '../shared/components/login/login';
import Signup from '../shared/components/signup/signup'
import AddCategory from './components/categories/categories.form';

export default function AdminRoutes() {
    return (
        <>
            <Switch>
                <Route exact path="/404" >
                    Not Found
                </Route>
                <Route exact path="/admin/dashboard" >
                    <Dashboard />
                </Route>
                <Route exact path="/admin/categories" >
                    <Categories />
                </Route>
                <Route exact path="/admin/add-category" >
                    <AddCategory />
                </Route>
                <Route path="/admin/products" >
                    <Products />
                </Route> 
                <Route path="/admin/orders" >
                    <Orders />
                </Route> 
            </Switch>
        </>
    )
}