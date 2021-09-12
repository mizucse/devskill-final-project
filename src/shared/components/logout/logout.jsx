import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { signOutAction } from "../../../store/action/signOutAction";

export default function Logout()  {
    const dispatch = useDispatch();

    useEffect(()=>{
        
    },[]);

    return
        <>
            {/* <Redirect to="/login" />  */}
        </>
}