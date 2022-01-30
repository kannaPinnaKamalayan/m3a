import React from "react";
import styled from "styled-components";
import Logo from "./logo512.png";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        <User>
          <div>
            <input type="text" placeholder="Username" />
          </div>
        </User>
        <Password>
          <div>
            <input type="password" placeholder="Password" />
          </div>
        </Password>

        <Nav>
          <Log>Login</Log>
        </Nav>

        <Form>
          <Forget>Hmmm.. You Forgot your Password ??</Forget>
        </Form>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-top: 60px;
  height: 100vh;
  background-color: #fe5115;
`;

const Content = styled.div`
  max-width: 1128px;
  position: relative;
  box-sizing: border-box;
  border-radius: 25px;
  margin-bottom: 10px;
  box-shadow: grey -1px 9px 10px inset;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: #f2ffe9; */
  background-color: white;

  @media (max-width: 768px) {
    width: 400px;
  }

  & > h3 {
    font-size: 30px;
    color: #0c0f0a;
    padding-top: 20px;
    text-decoration: none;
  }
  & > img {
    width: 200px;
    height: 200px;
  }
`;
const User = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  padding-top: 15px;

  & > div {
    max-width: 300px;

    input {
      outline: none;
      border: none;
      font-size: 15px;
      width: 300px;
      border: none;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      padding: 10px;
      color: #a9a9a9;
      margin-bottom: 10px;
      background: transparent;
      border: 1px solid grey;
      box-shadow: 0px 10px 6px grey;
      @media (max-width: 768px) {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
const Password = styled(User)`
  padding: 10px 0;
`;
const Nav = styled.nav`
  max-width: 1128px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  padding-top: 20px;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
    }
  }
`;
const Log = styled.button`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 50px;
  margin-left: 38%;
  padding: 8px;
  width: 25%;
  box-shadow: -1px 10px 6px grey;
  background: transparent;
  z-index: 0;
  transition-duration: 167ms;

  &:hover {
    background-color: #fe7648;
    color: white;
    box-shadow: -1px 5px 3px #8e2401 inset;
  }
`;
const Forget = styled.a`
  padding-top: 10px;
  text-decoration: none;
  padding: 10px;
  margin-top: 15px;
  cursor: pointer;
  opacity: 30%;

  &:hover {
    opacity: 100%;
  }
`;
const Form = styled.div`
  margin-top: 50px;
  padding-bottom: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Login;
