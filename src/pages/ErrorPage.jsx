import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/images/egon schiele-self portrait-1911.jpg";

const StyledErrorPage = styled.div`
  .bkgd-img {
    heigth: 100vh;
    width: 100vw;
  }
`;

function ErrorPage() {
  return (
    <StyledErrorPage>
      <div>
        <body
          className="bkgd-img"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <h3>404</h3>
          <p>Page not found.</p>
        </body>
      </div>
    </StyledErrorPage>
  );
}

export default ErrorPage;
