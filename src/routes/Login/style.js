import styled from "styled-components";
import { colors } from "../../utils";

export const LoginContainer = styled.div`
    text-align: center;
    box-sizing: border-box;
    color: ${colors.white};
    background-color: ${colors.primary};
    height: 100vh;
    width: 100%;
    display: flex;
    
    #img{
        width: 40%;
        // background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20210420/pngtree-colorless-decorative-line-draft-design-of-beauty-salon-image_639857.jpg");
        background-color: ${colors.secondary};
    }

    #form-div{
        padding: 20px;
        width: 60%;
        position: relative;
        background-color: ${colors.lightGray};
        box-sizing: border-box;
        text-align: right;
    }

    #login{
        left: -283px;
        left: -26vh;
        // font-size: 6.8em;
        font-size: 10vh;
        position: absolute;
        height: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        transform: rotate(-90deg);
        box-sizing: border-box;
    }

    h1{
        margin: 0;
        font-weight: bold;
        background: linear-gradient(${colors.white} 50%, ${colors.secondary} 0);
        //  text-shadow: 2px 2px 4px black;
        -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
        box-sizing: border-box;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        max-width: 300px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        top: -60px;

        h2{
            margin-top: 0;
            color: ${colors.secondary};
        }

        span{
            color: ${colors.primary};
            font-size: .9em;
        }

        input[type="text"], input[type="password"]{
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
        }

        input[type="submit"]{
            padding: 10px 50px;
            margin: 20px 0 10px 0;
            border: none;
            border-radius: 4px;
            background-color: ${colors.secondary};
            color: ${colors.white};
        }

        input[type="submit"]:hover{
            cursor: pointer;
            background-color: ${colors.hover};
        }
    }

    .ant-spin-dot-item{
        background-color: ${colors.secondary};
    }

    .loading{
        margin-top: 10px;
    }
`