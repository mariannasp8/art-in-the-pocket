import React from "react";
import styled from "styled-components";
/* import searchIcon from "../assets/icons/search.2.png"; */

const StyledSearchBar = styled.div`
  width: 20px;
  heigth: 60px;
  border-radius: 8px;
`;

function SearchBar({ placeholder, data }) {
  return (
    <StyledSearchBar>
      <div className="search">
        <div className="searchInp">
          <input type="text" placeholder="Search for Artists ..."></input>
          <div className="searcIcon"></div>
          <div className="searchResult"></div>
        </div>
      </div>
    </StyledSearchBar>
  );
}

export default SearchBar;
