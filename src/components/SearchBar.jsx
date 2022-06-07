import React from "react";
import styled from "styled-components";
/* import searchIcon from "../assets/icons/search.2.png"; */

const StyledSearchBar = styled.div`
  width: 20px;
  heigth: 60px;
  border-radius: 8px;

  .inputBar {
    ${({ theme }) => theme.colors.lightGrey || "#B9AFAC"};
    border-radius: 8px;
    ${"" /*  border: none; */}
    background-color: hsla(0, 100%, 99%, 0.4);
    padding: 5px 72px;
  }
`;

function SearchBar({ placeholder, data }) {
  return (
    <StyledSearchBar>
      <div className="search">
        <div className="searchInp">
          <input
            className="inputBar"
            type="text"
            placeholder="Search for Artists ..."
          ></input>
          <div className="searcIcon"></div>
          <div className="searchResult"></div>
        </div>
      </div>
    </StyledSearchBar>
  );
}

export default SearchBar;
