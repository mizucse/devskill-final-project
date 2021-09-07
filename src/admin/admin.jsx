import React from 'react';
import { Router, Switch } from 'react-router-dom';
import AdminRoutes from './admin.routes';
import AdminNavBar from './components/navbar/navbar';


export default function Admin() {
    return (
        <>
            <AdminNavBar >
                <AdminRoutes /> 
            </AdminNavBar>
        </>
    )
}