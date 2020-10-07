import React from "react";
import Banner from "../banner";
import styled from "styled-components";
import img from "../../public/image_5.png";

const Image = styled.div`
background-image:url(${img});
background-repeat:no-repeat;
height:1000px;
width:500px;
`;


const LeftDiv = () => {
return<Image>
<Banner></Banner>
</Image>

}

export default LeftDiv; 