import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getError } from "../utils";
import { app } from "./firebase";

export const login = async (email, password) => {
    const auth = getAuth(app);
    let user = undefined;

    try {
        const firebaseUser = await signInWithEmailAndPassword(auth, email, password)
        user = firebaseUser.user;
    }

    catch (error) {
        const errorCode = error.code || error.response.data.message;
        throw new Error(getError(errorCode))
    }

    return user;
}



export const getAuthentication = () => {
    return getAuth(app);
}

export const logout = () => {
    const auth = getAuth(app);
    auth.signOut().then(() => {
        console.log("User logged out")
        sessionStorage.setItem("saloon_id", null);
    }).catch((error) => {
        // An error happened.
    });
}