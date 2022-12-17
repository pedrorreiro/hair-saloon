import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

export const login = async (email, password) => {
    const auth = getAuth(app);

    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            return user;
            // ...
        })
        .catch((error) => {
            console.log(error);

            const errorCode = error.code;

            if (errorCode === "auth/wrong-password") {
                return "Senha incorreta!";
            }

            if (errorCode === "auth/user-not-found") {
                return "Usuário não encontrado!";
            }


        });
}

export const getAuthentication = () => {
    return getAuth(app);
}

export const logout = () => {
    const auth = getAuth(app);
    auth.signOut().then(() => {
        console.log("User logged out")
    }).catch((error) => {
        // An error happened.
    });
}