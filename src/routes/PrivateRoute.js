import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthentication } from "../firebase/auth";

export default function PrivateRoute() {
    const [user, setUser] = React.useState(undefined);

    getAuthentication().onAuthStateChanged(user => {
        setUser(user);
    })

    return typeof user === 'undefined' ? null : user ? <Outlet /> : <Navigate to="/login" replace />;

}