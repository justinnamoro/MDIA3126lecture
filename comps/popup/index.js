import React from "react";
import styled from "styled-components";

const Box = styled.div`
background-color:#A1A6C5;
padding:30px;
width:400px;
height:200px;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
border-radius:5px;
`;

const Welcome = styled.h1`
color:white
`;


const PopUp = () => {
    return <Box>
        <Welcome>Welcome to My App!</Welcome>

    </Box>
};

export default PopUp;