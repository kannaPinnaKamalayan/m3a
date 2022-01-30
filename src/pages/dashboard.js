import React from "react";
import styled from "styled-components";
import DashHeader from "./components/dashboardComponents/dash_header";
import DeliveryBoy from "./components/dashboardComponents/deliveryBoy";
import DashNav from "./components/dashboardComponents/dashNav";
import Order from "./components/dashboardComponents/dashorder";

function Dashboard() {
  return (
    <Container>
      <DashHeader />
      <DashNav />
      <Dash>
        <DeliveryBoy />
        <Order />
      </Dash>
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

export default Dashboard;
