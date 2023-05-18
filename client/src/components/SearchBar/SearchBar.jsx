import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCountryByQuery } from "../../Redux/actions/actions";

const Li = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #666;
  border-radius: 20px;
  padding-left: 3px;
  padding-right: 3px;

  .boton {
    height: 40px;
    border-radius: 50%;
  }
  .input {
    width: 250px;
    height: 35px;
    border-radius: 20px;
    font-size: medium;
    text-align: center;
  }
`;

const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountryByQuery(name));
  };

  return (
    <Li>
      <input
        className="input"
        type="search"
        placeholder="Search Country"
        onChange={(e) => handleChange(e)}
      />
      <button className="boton" type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </Li>
  );
};

export default SearchBar;
