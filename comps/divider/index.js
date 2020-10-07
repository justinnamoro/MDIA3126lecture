import React from "react";
import styled from "styled-components";

const Box = styled.div`
display:flex;
`;

const Line = styled.div`
width:290px;
height:1px;
background-color:grey;
`;

const Divider = ({}) => {
return <Box>
<Line/>
</Box>


}

export default Divider;