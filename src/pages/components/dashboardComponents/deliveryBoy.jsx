import React from "react";
import styled from "styled-components";

function deliveryBoy() {
  return (
    <Box>
      <h2>
        <u>Delivery Man </u>
      </h2>

      <h3>Not Available</h3>
    </Box>
  );
}

const Box = styled.div`
  color: #fe5115;
  margin-left: 20px;
  padding: 10px;
  border-radius: 20px;
  height: 70vh;
  width: 20%;
  background-color: white;
  text-align: center;

  & > h3 {
    color: black;
  }
`;

export default deliveryBoy;
