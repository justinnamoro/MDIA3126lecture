import React from "react";
import styled from "styled-components";
import Google from "../google";
import Divider from "../divider";
import Input from "../input";
import Buttons from "../buttons";

const Box = styled.div`
width:350px;
height:1000px;
`;

const RightDiv = () => {
    return <Box>
        <h1>Welcome Back!</h1>
        <Google/>
        <Divider/>
        <Input/>
        <Buttons/>

    </Box>
}




export default RightDiv; 