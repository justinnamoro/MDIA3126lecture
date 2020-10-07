import React from "react";
import styled from "styled-components";

const Outer = styled.div`
display:flex;
flex-direction:column;
margin-bottom:10px;
`;

const Label = styled.h3`
font-size:14px;
font-family:sans-serif;
color:#686868;
`;

const Enter = styled.div`
padding:20px;
border-radius:5px;
background-color:#F2F4FB;
width:150px;
font-family:sans-serif;
`;


const Input = ({}) => {
return<Outer>
    <Label>Label</Label>
    <Enter>joe@gmail.com</Enter>

</Outer>


}      


export default Input;