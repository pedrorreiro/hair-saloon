import { Spin } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { bdLogin } from "../../actions";
import { AuthContext } from "../../App";
import { login } from "../../firebase/auth";
import { colors } from "../../utils";
import { LoginContainer } from "./style";

export default function Login() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();

    const [errors] = React.useContext(AuthContext);

    const handleLogin = async (e) => {

        setLoading(true);

        e.preventDefault();

        try {
            await bdLogin(email);
            const user = await login(email, password);
            console.log("User logged in");
            console.log(user);
            navigate("/")
        }
        catch (error) {
            errors.error(error.message);
        }


        setLoading(false);
    }

    return (
        <LoginContainer>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                {loading ? <Spin className="loading" style={{ color: colors.yellow }} /> : <input type="submit" value={"Entrar"} />}
            </form>

        </LoginContainer>
    )
}