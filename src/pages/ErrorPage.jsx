import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/images/egon-schiele-self-portrait-1911.jpg";
import { Link } from "react-router-dom";

const StyledErrorPage = styled.div`
  .bkgd-img {
    heigth: 100vh;
    width: 100vw;
    background-size: cover;
    backgroung-position: center;
  }
  h1 {
    color: ${({ theme }) => theme.colors.black || "#000000"};
    padding-top: 140px;
  }
  h3 {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
  p {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
    ${"" /* border: 1px solid red; */}
  }
  link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
  .goToHome {
    color: ${({ theme }) => theme.colors.black || "#000000"};
    font-size: 18px;
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
          <h1>Art in your pocket</h1>
          <h3>404</h3>
          <p>Page not found.</p>
          <div>
            <p className="goToHome">Go to the Home Page</p>
            <Link to="/">
              {" "}
              <b>Home Page</b>
            </Link>
          </div>
        </body>
      </div>
    </StyledErrorPage>
  );
}

export default ErrorPage;
