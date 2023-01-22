import styled from "styled-components";

export const StatisticsStyle = styled.div`

header{

    margin-bottom: 20px;

    p{
        margin: 0;
    }

    small{
        color: gray;
        font-size: .8em;
    }
}

.statistic{
    -webkit-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.2);

    &:hover{
        cursor: pointer;
        background-color: #f5f5f5;
    
}
.ant-statistic-title{
    font-size: 1.2em;
}
`