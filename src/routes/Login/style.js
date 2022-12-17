import styled from "styled-components";
import { colors } from "../../utils";

export const LoginContainer = styled.div`
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    color: ${colors.white};
    background-color: ${colors.primary};
    height: 100vh;

    h1{
        margin: 0;
        margin-bottom: 20px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        max-width: 300px;
        margin: 0 auto;

        input[type="text"], input[type="password"]{
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
        }

        input[type="submit"]{
            padding: 10px 30px;
            border: none;
            border-radius: 5px;
            background-color: ${colors.yellow};
            color: ${colors.white};
        }

        input[type="submit"]:hover{
            cursor: pointer;
        }
    }

    .ant-spin-dot-item{
        background-color: ${colors.yellow};
    }

    .loading{
        margin-top: 10px;
    }
`