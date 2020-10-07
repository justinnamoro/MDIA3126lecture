import React from "react";
import styled from "styled-components";

const Container = styled.div`
padding:30px;
width: 500px;
height:100px;
background-color:#FFF;
opacity:70%;
`;

const Head = styled.h1`
color:black;
font-family:sans-serif;

`;

const Content = styled.p`
color:rgb(0,100,255);
font-family:sans-serif;

`;


const Banner = () => {
return <Container>
<Head>Hack your way to learning</Head>
<Content>Start Your Free Account Today</Content>
</Container>

}

export default Banner;