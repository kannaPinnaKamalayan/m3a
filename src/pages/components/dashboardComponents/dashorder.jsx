import React from "react";
import styled from "styled-components";
import OrderList from "./orderList";

function order() {
  return (
    <Box>
      <center>
        <h2>
          <u>Orders</u>
        </h2>
      </center>
      <OrderList></OrderList>
    </Box>
  );
}
const Box = styled.div`
  color: #fe5115;
  margin-left: 60px;
  padding: 10px;
  border-radius: 20px;
  min-height: 70vh;
  height: max-content;
  width: 70%;
  background-color: white;
`;
export default order;
