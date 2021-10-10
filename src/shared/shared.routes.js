import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
// import Dashboard from './components/dashboard/dashboard';
import PublicProducts from './components/product/product';
import ProductDetails from './components/product/product.view';
// import Categories from './components/categories/categories'; 
import Orders from './components/orders/order.list';  
// import Users from './components/users/users';  
import CartList from './components/cart/cartList';
import { useSelector } from 'react-redux';
import Login from './components/login/login';
import Profile from './components/profile/profile.view';
// import ProfileUpdate from './components/profile/profile.update';

export default function UserRoutes() {
    const userInfo = useSelector(store => store.authStore);
    const role = userInfo.role;
    const token = userInfo.token;
    // alert(token);
    return (
        <>
            <Switch> 
                <Route exact path="/" >
                    <PublicProducts />
                </Route> 
                <Route exact path="/product/:id" >
                    <ProductDetails />
                </Route>  
                <Route path="/orders" >
                    <Orders />
                </Route>
                <Route path="/profile" >
                    <Profile />
                </Route>  
                {/* <Route path="/update-profile" >
                    <ProfileUpdate />
                </Route>   */}
                <Route path="/login" >
                    <Login />
                </Route> 
                
                <Route path="/cart" >
                    <CartList />
                </Route> 
                
                <Route exact path="*" >
                    Not Found
                </Route>
            </Switch>
        </>
    )
}