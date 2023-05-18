import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const Ul = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bar = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Li = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .btn {
    width: 150px;
    height: 35px;
    border-radius: 10px;
    font-size: medium;
  }
`;

const NavBar = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  background-color: #000000;
`;

const Nav = () => {
  return (
    <NavBar>
      <Ul>
        <Li>
          <Link to="/home">
            <button className="btn">Home</button>
          </Link>
        </Li>
        <Li>
          <Link to="/activities">
            <button className="btn">Activities</button>
          </Link>
        </Li>
        <Li>
          <Link to="/contact">
            <button className="btn">Contact Us</button>
          </Link>
        </Li>
        <Li>
          <Link to="/about">
            <button className="btn">About</button>
          </Link>
        </Li>
      </Ul>
      <Bar>
        <SearchBar />
      </Bar>
    </NavBar>
  );
};
export default Nav;
