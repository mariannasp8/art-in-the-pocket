import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const StyledProfile = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    flex-flow: column wrap;
    font-size: 1rem;

    button {
      background-color: ${({ theme }) => theme.colors.black || "#000000"};
      border-style: none;
      color: ${({ theme }) => theme.colors.white || " #ffffff"};
      width: 100%;
      height: 3rem;
      margin-top: 1rem;
      border-radius: 8px;
      padding: 80px 20px 80px 20;
      text-align: center;
      font-size: 18px;
    }
    .option-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
    }
  }
`;

function ProfilePage() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const [loggedUser, setLoggedUser] = useState({});

  const getUser = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/profile`
      );
      setLoggedUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <StyledProfile>
      <div>
        <h5>Welcome {loggedUser.name} </h5>
        <h5>Name: {loggedUser.name}</h5>
        <h5>Username: {loggedUser.username}</h5>
        <h5>Email: {loggedUser.email}</h5>

        {/* upload profile picture*/}
        <div className="option-box">
          <Link to="/collection"> My Collection</Link>
          <Link to="/favorite"> My Favorite</Link>
          {/* <Link to="/friends"> My Friends</Link> */}
        </div>
      </div>
    </StyledProfile>
  );
}

export default ProfilePage;
