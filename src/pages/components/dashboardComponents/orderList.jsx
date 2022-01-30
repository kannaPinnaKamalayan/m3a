import React from "react";
import styled from "styled-components";

function orderList() {
  return (
    <Dabba>
      <h3>No Orders</h3>
    </Dabba>
  );
}

const Dabba = styled.div`
  height: 100px;
  border-radius: 10px;
  background-color: #feb39a;
  text-align: center;
  padding: 1px;
  & > h3 {
    color: black;
  }
`;
export default orderList;
