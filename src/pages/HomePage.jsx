import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
 */
const StyledHomePage = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    flex-flow: column wrap;
    font-size: 1rem;
  }
`;

function HomePage() {
  // /*   const { isLoggedIn, user, logoutUser } = useContext(AuthContext); */

  return (
    <StyledHomePage className="homePage">
      {/*  metter imagem */}
      <div>
        <h1>Art in your pocket</h1>
        <h5>The virtual world of art in your pocket</h5>
        <Link to="/signup"> singop</Link>
        <div>{/* <Link to={`/profile/${user._id}`}> My Profile</Link> */}</div>
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
