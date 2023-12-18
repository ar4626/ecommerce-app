import { Navigate } from "react-router-dom";
import React from 'react'

const Privateroutes = ({children}) => {
    console.log("PrivateRoutes component is rendered");
    const getTokenFromLocalStorage = localStorage.getItem("customer")
    console.log(getTokenFromLocalStorage);
    
}

export default Privateroutes