import React from "react";
import styled from "styled-components";
import DashHeader from "./components/dashboardComponents/dash_header";
import DashNav from "./components/dashboardComponents/dashNav";
import Bar from "./components/stocksComponents/bar";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const hubs = ["Vashi S14 Hub", "Sanpada Hub", "Vashi S9 Hub", "Dadar Hub"];
const products = ["Idly Atta 1kg", "Idly Atta 500g", "Dasa Atta 250g"];
const defaultOptionhubs = hubs[0];
const defaultOptionproducts = products[0];

function StockDetectSales() {
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
        <Box2>
          <form>
            {/* <Dropdown
              options={hubs}
              onChange={this._onSelect}
              value={defaultOptionhubs}
              placeholder="Select an option"
            /> */}
            {/* <Dropdown
              options={products}
              onChange={this._onSelect}
              value={defaultOptionproducts}
              placeholder="Select an option"
            /> */}
            <input type="number" placeholder="in Kgs"></input>
            <br />
            <input type="radio" value="Fully Paid" name="Payment" /> Fully Paid{" "}
            <input type="text" placeholder="Mode"></input>
            <input type="number" placeholder="Amount"></input>
            <br />
            <input type="radio" value="Partial Paid" name="Payment" /> Partially
            Paid <input type="text" placeholder="Mode"></input>
            <input type="number" placeholder="Amount"></input>
            <br />
            <input type="radio" value="Fully credit" name="Payment" /> Fully
            Credit <br />
            <input type="text" placeholder="Notes"></input>
          </form>
        </Box2>
      </Dash>
    </Container>
  );
}

const Box2 = styled.div`
  color: #fe5115;
  margin-left: 60px;
  padding: 10px;
  border-radius: 20px;
  min-height: 70vh;
  height: max-content;
  width: 70%;
  background-color: white;
`;
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

export default StockDetectSales;
