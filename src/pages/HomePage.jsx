import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import homeImage from "../assets/images/splash_01.jpg";
/*import { AuthContext } from "../context/auth.context";
 */
const StyledHomePage = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    flex-flow: column wrap;
    font-size: 1rem;
    ${"" /* font-family: "Unna", serif; */}
    font-family: "Joan", serif;
  }
  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .slogan {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    padding-left: 40px;
    padding-right: 40px;
  }
  h1 {
    margin-top: 160px;
    font-size: 40px;
    padding-top: 180px;
    padding-bottom: 20px;
    color: ${({ theme }) => theme.colors.black || "#000000"};
  }
  h5 {
    font-size: 40px;
    color: white;
  }
  p {
    font-size: 16px;
    padding-top: 60px;
    color: ${({ theme }) => theme.colors.black || "#000000"};
  }
  .link {
    text-decoration: none;
  }
  .bkgd-img {
    heigth: 100vh;
    width: 100vw;
    background-size: cover;
    ${"" /* background-position: center; */}
  }
  b {
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
`;

function HomePage() {
  // /*   const { isLoggedIn, user, logoutUser } = useContext(AuthContext); */

  return (
    <StyledHomePage className="homePage">
      <body
        className="bkgd-img"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div>
          <h1>Art in your pocket</h1>
          <div className="slogan">
            <h5>
              <b>The virtual world of art in your pocket</b>
            </h5>
          </div>
          <p>
            Don't know the app?{" "}
            <Link to="/signup" className="link">
              {" "}
              <b>signup</b>{" "}
            </Link>{" "}
            or{" "}
            <Link to="/login" className="link">
              {" "}
              <b>login</b>
            </Link>
          </p>

          <div>
            {/* <Link to={`/profile/${user._id}`}> My Profile</Link> */}
          </div>
        </div>
      </body>
    </StyledHomePage>
  );
}

export default HomePage;
