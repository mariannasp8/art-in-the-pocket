import React from "react";
import styled from "styled-components";

const StyledHomePage = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    flex-flow: column wrap;
    font-size: 1rem;
  }
`;

function HomePage() {
  return (
    <StyledHomePage className="homePage">
      {/*  metter imagem */}
      <div>
        <h1>Art in your pocket</h1>
        <h5>The virtual world of art in your pocket</h5>
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
