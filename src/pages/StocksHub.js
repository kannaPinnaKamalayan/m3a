import React from "react";
import styled from "styled-components";
import DashHeader from "./components/dashboardComponents/dash_header";
import DashNav from "./components/dashboardComponents/dashNav";
import Bar from "./components/stocksComponents/bar";
import { Link } from "react-router-dom";

function StocksHub() {
  return (
    <Container>
      <DashHeader />
      <DashNav />
      <Bar />
      <Dash>
        <Box>
          <Link to="/addstock">Enter Stock </Link>
          <Link to="/detectsales">Detect Stock </Link>
        </Box>
      </Dash>
    </Container>
  );
}

const Box = styled.div`
  color: #fe5115;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  color: #fe5115;

  display: flex;
  border-radius: 20px;
  height: 40vh;
  width: 15%;
  background-color: white;
  text-align: center;

  & > h3 {
    color: black;
  }
`;
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

export default StocksHub;
