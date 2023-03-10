import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
`;

const Li = styled.li`
  display: flex - inline;
  color: white;
  text-align: center;
  padding: 10px 20px;
`;

const Nav = () => {
  return (
    <nav>
    
      <Ul>
        <Li>
          <Link to="/home"><button>Home</button></Link>
        </Li>
        <Li>
          <Link to="/activities"><button>Activities</button></Link>
        </Li>
        <Li>
          <Link to="/contact"><button>Contact Us</button></Link>
        </Li>
        <Li>
          <Link to="/about"><button>About</button></Link>
        </Li>
        <Li>
          <SearchBar/>
        </Li>
      </Ul>
    </nav>
  );
}
export default Nav