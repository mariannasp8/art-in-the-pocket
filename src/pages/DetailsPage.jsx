import React from "react";
/* import axios from "axios"; */
import styled from "styled-components";
import base1 from "../assets/images/base-01.jpg";
/* import base2 from "../assets/images/base-02.jpg"; */

const StyledDetailsPage = styled.body`
  heigth: 100vh;
  width: 100wh;
  background-size: cover;
  background-position: center;
  .all-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  h1 {
    color: ${({ theme }) => theme.colors.black || "#000000"};
  }
  b {
    color: ${({ theme }) => theme.colors.black || "#000000"};
  }
  .link {
    text-decoration: none;
  }
  .link b {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
  p {
    color: ${({ theme }) => theme.colors.black || "#000000"};
  }
  .piece-img {
    border: 1px solid red;
    height: 35vh;
    width: 80vw;
  }
  .details-img {
    border: 1px solid orange;
    height: 10vh;
    width: 80vw;
  }
  .text-img {
    border: 1px solid blue;
    height: 20vh;
    width: 80vw;
  }
`;

function DetailsPage() {
  return (
    <div className="all-page">
      <StyledDetailsPage style={{ backgroundImage: `url(${base1})` }}>
        <h1>Art in your Pocket</h1>
        <div className="piece-img"></div>
        <div className="details-img"></div>
        <div className="text-img"></div>
      </StyledDetailsPage>
    </div>
  );
}

export default DetailsPage;
