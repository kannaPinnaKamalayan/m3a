import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./nav.css";

function dashNav() {
  return (
    <NavBar>
      <TimeDate>
        <p>Time</p>
      </TimeDate>
      <NavLink to="/dashboard" className="Navfont">
        Dashboard
      </NavLink>
      <NavLink to="/analysis" className="Navfont">
        Analysis
      </NavLink>
      <NavLink to="/stockstore" className="Navfont">
        Stocks
      </NavLink>
      <NavLink to="/hubs" className="Navfont">
        Hubs
      </NavLink>
      <NavLink to="/admin" className="Navfont">
        Administrate
      </NavLink>
    </NavBar>
  );
}

const TimeDate = styled.div`
  display: flexbox;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;

  padding: 0.5px;
  background-color: white;
  box-shadow: -1px 6px 10px #8e2401;
  color: #fe5115;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
  width: 5vw;
  height: 8vh;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0px;
  position: sticky;
  top: 0px;

  padding: 0px;
  width: inherit;
  color: white;
  height: 10vh;
  background-color: #fe5115;
  box-shadow: 0px 10px 15px #8e2401;
`;

export default dashNav;
