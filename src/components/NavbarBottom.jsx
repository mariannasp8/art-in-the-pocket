import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import homeIcon from "../assets/icons/home-icon.png.png";
import heartIcon from "../assets/icons/heart-icon.png.png";
import collectionIcon from "../assets/icons/collection-icon.png.png";
import profileIcon from "../assets/icons/profile-icon.png.png";
import searchIcon from "../assets/icons/search-icon.png.png";

const StyledNavBottom = styled.nav`
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  align-content: center;
  background-color: whiteTransparent;
  width: 80%;
  height: 7vh;
  position: fixed;
  bottom: 0;
  border-radius: 24px 24px 0px 0px;
  border: 1px solid white;
`;

const SelectedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 0;
  width: 52px;
  height: 52px;
  ${"" /* border: 1px solid red; */}
  &:active {
    background-color: whiteTransparent;
    border-radius: 52px;
  }
`;
const NavLink = styled(Link)`
  ${"" /* border: 1px solid blue; */}
  text-decoration: none;
  color: white;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover ${SelectedIcon} {
    background-color: whiteTransparent;
    border-radius: 52px;
  }
`;

const NavIcons = styled.img`
  margin-bottom: 0;
  -webkit-filter: invert(100%);
  width: 8vw;
  color: black;
`;

function NavbarBottom() {
  return (
    <>
      <StyledNavBottom>
        <NavLink to="/">
          <SelectedIcon>
            <NavIcons src={homeIcon} />
          </SelectedIcon>
        </NavLink>
        <NavLink to="/favorite">
          <SelectedIcon>
            <NavIcons src={heartIcon} alt="Heart Icon" />
          </SelectedIcon>
        </NavLink>
        <NavLink to="/collection">
          <SelectedIcon>
            <NavIcons src={collectionIcon} alt="Collection Icon" />
          </SelectedIcon>
        </NavLink>
        <NavLink to="/profile">
          <SelectedIcon>
            <NavIcons src={profileIcon} alt="Profile Icon" />
          </SelectedIcon>
        </NavLink>
        <NavLink to="/search">
          <SelectedIcon>
            <NavIcons src={searchIcon} alt="Search Icon" />
          </SelectedIcon>
        </NavLink>
      </StyledNavBottom>
    </>
  );
}

export default NavbarBottom;
