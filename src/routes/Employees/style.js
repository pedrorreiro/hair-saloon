import styled from "styled-components";
import { colors } from "../../utils";

export const StyleEmployees = styled.div`
    h1{
        text-align: center;
    }

    table{

        margin: auto;

        margin-top: 20px;

        img{
            width: 20px;
            height: 20px;
        }

        img:hover{
            cursor: pointer;
        }

        thead tr .ant-table-cell{
            background-color: ${colors.primary};
            color: ${colors.white};
        }

        border-radius: 6px;

        -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.4);
        -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.4);
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.4);
    }

    > div{

        max-width: 90%;
        margin: auto;
        text-align: right;

        button{
            background-color: ${colors.primary};
            color: ${colors.white};
            padding: 20px 20px;
            display: inline-flex;
            align-items: center;

            &:hover{
                cursor: pointer;
                color: ${colors.white};
            }
        }
    }

    
`