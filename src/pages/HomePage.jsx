import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavbarBottom from "../components/NavbarBottom";
import homeImage from "../assets/images/splash_01.jpg";
/*import { AuthContext } from "../context/auth.context";
 */
const StyledHomePage = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    flex-flow: column wrap;
    font-size: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 40px;
    padding-top: 180px;
  }
  h5 {
    font-size: 40px;
    color: white;
  }
  p {
    font-size: 16px;
    padding-top: 20px;
  }
  .link {
    text-decoration: none;
  }
  .bkgd-img {
    heigth: 100vh;
    width: 100vw;
  }
  b {
    color: black;
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
            <h5>The virtual world of art in your pocket</h5>
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
