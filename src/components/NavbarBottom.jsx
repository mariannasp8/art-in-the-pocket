import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import homeIcon from "../assets/icons/home.2.png";
import heartIcon from "../assets/icons/heart.2.png";
import collectionIcon from "../assets/icons/collection.2.png";
import profileIcon from "../assets/icons/profile.2.png";
import searchIcon from "../assets/icons/search.2.png";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledNavBottom = styled.nav`
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  align-content: center;
  background-color: rbga(100, 100, 100, 0.5);
  border: 1px solid white;
  width: 80%;
  height: 7vh;
  position: fixed;
  margin-top: 745px;
  border-radius: 24px 24px 24px 24px;
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
`;
const NavLink = styled(Link)`
  ${"" /* border: 1px solid blue; */}
  text-decoration: none;
  color: black;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover ${SelectedIcon} {
    background-color: lightGrey;
    ${"" /* border-radius: 52px; */}
  }
  &:active {
    color: red;
  }
`;

const NavIcons = styled.img`
  margin-bottom: 0;
  width: 8vw;
`;

function NavbarBottom() {
  return (
    <>
      <StyledPage>
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
      </StyledPage>
    </>
  );
}

export default NavbarBottom;
