import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { LOGIN } from "../utils/constants";

export default function ProtectedAdminRoute ({children}){
    const userInfo = useSelector(store => store.authStore);
    const role = userInfo.role;
    const token = userInfo.token;
    
    return (
        <Route render={()=>(token != null && role === 'admin')? children:<Redirect to={LOGIN}/>}/>
    );
}