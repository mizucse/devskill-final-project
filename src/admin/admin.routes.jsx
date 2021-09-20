import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Dashboard from './components/dashboard/dashboard';
import PublicProducts from './components/publicProducts/public.product';
import ProductDetails from './components/publicProducts/public.product.details';
import Categories from './components/categories/categories';
import Products from './components/products/products';
import Orders from './components/orders/orders'; 
import AddCategory from './components/categories/categories.form'; 
import Users from './components/users/users'; 
import AddProduct from './components/products/products.form';
import CartList from './components/cart/cartList';
import UpdateCategory from './components/categories/update_categories.form';

export default function AdminRoutes() {
    return (
        <>
            <Switch>
                <Route exact path="/admin" >
                    <Dashboard />
                </Route>
                {/* <Route exact path="/admin/public/products" >
                    <PublicProducts />
                </Route> */}
                {/* <Route exact path="/admin/public/product/:id" >
                    <ProductDetails />
                </Route> */}
                <Route exact path="/admin/add-category" >
                    <AddCategory />
                </Route>
                <Route exact path="/admin/update-category/:id" >
                    <UpdateCategory />
                </Route>
                <Route exact path="/admin/category" >
                    <Categories />
                </Route>
                <Route path="/admin/products" >
                    <Products />
                </Route>
                <Route path="/admin/add-product" >
                    <AddProduct />
                </Route> 
                <Route path="/admin/orders" >
                    <Orders />
                </Route> 
                <Route path="/admin/users" >
                    <Users />
                </Route> 
                <Route path="/admin/cart" >
                    <CartList />
                </Route> 
                <Route exact path="*" >
                    Not Found
                </Route>
            </Switch>
        </>
    )
}