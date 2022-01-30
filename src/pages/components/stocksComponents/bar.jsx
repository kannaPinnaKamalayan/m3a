import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function bar() {
  return (
    <center>
      <NavBar>
        <NavLink to="/stockstore" className="Navfont">
          <p1>Our Store</p1>
        </NavLink>
        <NavLink to="/stockhub" className="Navfont">
          <p1>Other Hubs</p1>
        </NavLink>
      </NavBar>
    </center>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  position: sticky;
  top: 50%;
  left: 50%;
  top: 0px;
  padding: 0px;
  width: inherit;
  height: 10vh;
  background-color: #000;
  box-shadow: -10px 10px 15px #8e2401;
`;

export default bar;
