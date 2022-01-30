import React from "react";
import styled from "styled-components";
import DashHeader from "./components/dashboardComponents/dash_header";
import DashNav from "./components/dashboardComponents/dashNav";
import Bar from "./components/stocksComponents/bar";

function StocksStore() {
  return (
    <Container>
      <DashHeader />
      <DashNav />
      <Bar />
      <Dash></Dash>
    </Container>
  );
}

const Container = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100vh;
  background-color: #fe5115; ;
`;

const Dash = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding-top: 50px;
  height: 100%;
  background-color: #fe5115;
`;

export default StocksStore;
