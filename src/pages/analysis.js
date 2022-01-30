import React from "react";
import styled from "styled-components";
import DashNav from "./components/dashboardComponents/dashNav";
import DashHeader from "./components/dashboardComponents/dash_header";

function analysis() {
  return (
    <Container>
      <DashHeader />
      <DashNav />
      <Dash>
        <Today>
          <TodayBox>
            <TodayBoxIcon>Icon</TodayBoxIcon>
            <TodayBoxText>Sales</TodayBoxText>
            <TodayBoxValaue>Rs 1820</TodayBoxValaue>
          </TodayBox>
          <TodayBox>
            <TodayBoxIcon>Icon</TodayBoxIcon>
            <TodayBoxText>Credits</TodayBoxText>
            <TodayBoxValaue>- Rs 320</TodayBoxValaue>
          </TodayBox>
          <TodayBox>
            <TodayBoxIcon>Icon</TodayBoxIcon>
            <TodayBoxText>Orders Recived</TodayBoxText>
            <TodayBoxValaue>30</TodayBoxValaue>
          </TodayBox>
          <TodayBox>
            <TodayBoxIcon>Icon</TodayBoxIcon>
            <TodayBoxText>Successfull Orders</TodayBoxText>
            <TodayBoxValaue>28</TodayBoxValaue>
          </TodayBox>
        </Today>

        <div className="grid grid-flow-col">
          <div>jones</div>
          <div> joens </div>
        </div>
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

const Today = styled.div`
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin: 1px;
  padding: 5px;
  height: 30px;
  width: 100%;
`;

const TodayBox = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 1px;
  padding: 1.5px;
  justify-content: space-between;
  border-radius: 5px;
  background-color: white;
  box-shadow: -1px 9px 15px black;
  height: max-content;
  width: 23vh;
`;

const TodayBoxIcon = styled.div`
  padding: 3px;
  padding-bottom: 5px;
  display: flex;
  text-align: center;
  flex-direction: row;
  height: max-content;
  width: max-content;
`;

const TodayBoxText = styled.div`
  padding: 3px;
  padding-bottom: 5px;
  display: flex;
  text-align: center;
  flex-direction: row;
  height: max-content;
  width: max-content;
`;

const TodayBoxValaue = styled.div`
  padding: 3px;
  padding-bottom: 5px;
  display: flex;
  text-align: center;
  flex-direction: row;
  height: max-content;
  width: max-content;
`;

const SalesChat = styled.div`
  padding: 3px;
  padding-bottom: 5px;
  display: flex;
  text-align: center;
  flex-direction: row;
  height: max-content;
  width: max-content;
`;

export default analysis;
