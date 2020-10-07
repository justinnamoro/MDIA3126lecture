import React from "react";
import styled from "styled-components";

const Box =  styled.div`
display:flex;
flex-direction: column;
justify-content:center;
`;

const Content = styled.h1`
font-size:14px;
color:#FFF;
font-family: sans-serif;
`;

const Container = styled.div`
background-color:${props=> props.color ? props.color: "#3D6FF1"};
width:300px;
display:flex;
justify-content:center;
border-radius:5px;
margin-bottom: 5px;
`;

const Button = ({}) =>  {
    return <Box>
        <Container>
            <Content>Login</Content>
        </Container> 
        <Container color="#D79B9B">
            <Content>Signup</Content>
        </Container>
        </Box>



}

export default Button;