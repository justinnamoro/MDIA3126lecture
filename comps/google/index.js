import React from "react";
import styled from "styled-components";



const Container = styled.div`
background-color: #4285F4;
width:300px;
display:flex;
justify-content:center;
border-radius:2px;
margin-bottom: 5px;
`;

const Content = styled.h1`
font-size:14px;
color:#FFF;
font-family: sans-serif;
`;

const GoogleButton = ({}) => {
return <Container>
    <div><img src="/google.png" width="25px" height="25px" margin-top="10px"/></div>
    <Content>Login with Google</Content>
</Container>

}

export default GoogleButton;