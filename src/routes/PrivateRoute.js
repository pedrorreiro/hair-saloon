import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api";
import { SaloonContext } from "../Contexts/SaloonContext";
import { getAuthentication } from "../firebase/auth";

export default function PrivateRoute() {
    const [user, setUser] = React.useState(undefined);
    const [userData, setUserData] = React.useState({});
    const [saloonId, setSaloonId] = React.useState(undefined);

    getAuthentication().onAuthStateChanged(async user => {
        setUser(user);
    })

    useEffect(() => {
        const getUserData = async () => {
            const u = (await api.getUserByEmail(user?.email)).data
            console.log(u);
            setUserData(u);

            const func = await api.getFuncionaryByUserId(u.key);
            console.log(func);
            setSaloonId(func.saloonId);
        }

        if (user?.email) getUserData();

    }, [user])

    return typeof user === 'undefined' ? null : user ?
        <SaloonContext.Provider value={[saloonId, setSaloonId]}>
            <Outlet />
        </SaloonContext.Provider> : <Navigate to="/login" replace />;

}