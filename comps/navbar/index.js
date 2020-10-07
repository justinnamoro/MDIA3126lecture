import React from "react";
import styled from "styled-components";
import Avatar from "../../public/Avatar.png";

const Bar = styled.div`
width:1000px;
height:50px;
box-shadow: 0 0 5px #333;
background-color:#F2F4FB;
`;

const ProfilePic = styled.img`
position:absolute;
right:420px;
`;


const NavBar = ()=> {
return <Bar>
<ProfilePic src={Avatar}/>
</Bar>

}

export default NavBar;