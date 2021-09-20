import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import NavBar from './components/navbar/navbar';
import UserRoutes from './shared.routes';


export default function Shared() {
    return (
        <> 
            <NavBar >
                <UserRoutes />
            </NavBar>
        </>
    )
}