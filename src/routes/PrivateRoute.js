import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthentication } from "../firebase/auth";

export default function PrivateRoute() {
    const [user, setUser] = React.useState(undefined);

    getAuthentication().onAuthStateChanged(async user => {
        setUser(user);
    })

    return typeof user === 'undefined' ? null : user ? <Outlet context={{
        user: user,
    }} /> : <Navigate to="/login" replace />;

}