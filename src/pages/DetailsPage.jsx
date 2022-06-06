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
`;

function DetailsPage() {
  return (
    <StyledDetailsPage style={{ backgroundImage: `url(${base1})` }}>
      <h1>Art in your Pocket</h1>
      <div></div>
    </StyledDetailsPage>
  );
}

export default DetailsPage;
