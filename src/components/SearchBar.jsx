import React, { useState } from "react";
import styled from "styled-components";
/* import searchIcon from "../assets/icons/search.2.png"; */

const StyledSearchBar = styled.div`
  width: 20px;
  heigth: 60px;
  border-radius: 8px;

  .inputBar {
    padding-top: 10px;
    color: ${({ theme }) => theme.colors.lightGrey || "#B9AFAC"};
    background-color: rgba(200, 200, 200, 0.5);
    border-radius: 8px;
    border: none;
    padding: 5px 72px;
    font-size: 12px;
    text-align: left;
  }
`;

function SearchBar({ handleSearch }) {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <StyledSearchBar>
      <div className="search">
        <div className="searchInp">
          <input
            className="inputBar"
            type="text"
            placeholder="Why don't you search for artists'"
            onChange={handleInput}
          ></input>
          <div className="searcIcon"></div>
          <div className="searchResult"></div>
        </div>
      </div>
    </StyledSearchBar>
  );
}

export default SearchBar;
