import React from "react";
import Logo from "./logo512.png";
import styled from "styled-components";
// import Paper from "@mui/material/Paper";

function dash_header() {
  return (
    <Header>
      <HeaderRight>
        <img src={Logo} alt="" />
        <TimeDate>
          <p>Date</p>
        </TimeDate>
      </HeaderRight>
      <HeaderLeft>
        <h6>Username</h6>
        {/* <Paper>jones</Paper> */}
        {/* <Setting /> */}
        {/* <Icon>setting</Icon> */}
      </HeaderLeft>
    </Header>
  );
}

const TimeDate = styled.div`
  display: flexbox;
  text-align: center;
  border-radius: 8px;
  justify-content: center;
  padding: 1px;
  background-color: white;
  box-shadow: -1px 6px 10px #8e2401;
  color: #fe5115;
  margin-top: 0.5%;
  width: 5vw;
  height: max-content;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px;
  position: sticky;
  top: 0px;
  scroll-margin-top: 10px;
  padding: 0px;
  width: inherit;
  color: white;
  height: 10vh;
  background-color: #fe5115;
  box-shadow: 0px 10px 15px #8e2401;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0px;
  position: sticky;
  top: 0px;
  scroll-margin-top: 10px;
  padding: 0px;
  width: 30vw;
  color: white;
  height: 10vh;
  background-color: #fe5115;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  left: 15vhpx;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0px;
  padding: 0px;
  width: 15vw;
  color: white;
  height: 10vh;
  background-color: #fe5115;
`;

export default dash_header;
