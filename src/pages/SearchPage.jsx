import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import ProfilePicture from "../assets/images/bronzino-portrair-of-a-young-man-1530.jpg";
import SearchBar from "../components/SearchBar";
import turnerImg from "../assets/image-modules/william-turner-whalers-1845.jpg";
import ingresImg from "../assets/image-modules/jean-dominique-ingres-josephine-eleonore-marie-paulina-1951-53.jpg";
import rubensImg from "../assets/image-modules/peter-paul-rubens-rubens-helena-fourment-and-their-son-1635.jpg";
import toilImg from "../assets/image-modules/francois-boucher-the-toilette-of-venus-1751.jpg";

const StyledSearchPage = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;

  h4 {
    font-size: 20px;
  }
  .profile-section {
    heigth: 50hw;
    width: 80vw;
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: flex-end;
    justify-content: space-between;
  }
  .welcome {
    margin-left: 90px;
  }
  .p {
    font-size: 12px;
  }
  .searchDiv {
    heigth: 40hw;
    width: 80vw;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
  }
  .reservedSec {
    heigth: 40hw;
    width: 80vw;
    border: 1px solid orange;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: center;
  }
  .modules {
    heigth: 20hw;
    width: 80vw;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
  }
  .textInside {
    font-size: 12px;
  }
  .search-section {
    border: 1px solid red;
    heigth: 40hw;
    width: 80vw;
  }
`;

function SearchPage() {
  return (
    <StyledSearchPage>
      <div>
        <section className="profile-section">
          <h5 className="welcome">
            Welcome <b>Vincent</b>
          </h5>
          <Avatar
            image={ProfilePicture}
            width="70px"
            alt="defaul profile picture"
          />
        </section>
        <div className="searchDiv">
          <h4>Art in your Pocket</h4>
          <p>Do your search ...</p>
          <SearchBar />
        </div>
        <section className="reservedSec">
          <div className="modules">
            <Avatar
              image={turnerImg}
              width="50px"
              alt="defaul profile picture"
            />
            <p className="textInside">
              <b>Exhibitions</b>
            </p>
          </div>
          <div className="modules">
            <Avatar
              image={ingresImg}
              width="50px"
              alt="defaul profile picture"
            />
            <p className="textInside">
              <b>Collections</b>
            </p>
          </div>
          <div className="modules">
            <Avatar image={toilImg} width="50px" alt="defaul profile picture" />
            <p className="textInside">
              <b>Museums</b>
            </p>
          </div>
          <div className="modules">
            <Avatar
              image={rubensImg}
              width="50px"
              alt="defaul profile picture"
            />
            <p className="textInside">
              <b>Artists</b>
            </p>
          </div>
        </section>
      </div>
      <div className="search-section"></div>
    </StyledSearchPage>
  );
}

export default SearchPage;
