import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import homeIcon from "../assets/icons/home-icon.png.png";
import heartIcon from "../assets/icons/heart-icon.png.png";
import collectionIcon from "../assets/icons/collection-icon.png.png";
import profileIcon from "../assets/icons/profile-icon.png.png";
import searchIcon from "../assets/icons/search-icon.png.png";

const StyledProfile = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  .section1 {
    heigth: 50hw;
    border: 1px solid green;
  }
  .section2 {
    height: 30hw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .option-box {
    padding-top: 60px;
    border: 1px solid red;
    height: 40hw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 1.2rem;
  }
  .text-option-box {
    text-decoration: none;
    font-size: 18px
    font-weight: bold;
  }
  .icons {
    height: 1.2rem;
  }
`;

function ProfilePage() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);
  const [picture, setPicture] = useState("");
  const [loggedUser, setLoggedUser] = useState({});

  const handlePicture = (file) => setPicture(file);

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
        <section className="section1">
          <h5>Here it will be the profile picture avatar</h5>
          {/* <img src={user.img} alt="profile-picture" className="profile-pic" /> */}
          <h5> {loggedUser.name} </h5>
          <h5>Vincent Van Gogh</h5>
        </section>
        <section className="section2">
          <h5>Name: {loggedUser.name}</h5>
          <h5>Username: {loggedUser.username}</h5>
          <h5>Email: {loggedUser.email}</h5>
          {/*   <UploadProfilePic handlePicture={handlePicture} /> */}
        </section>

        <div className="option-box">
          <Link to="/collection" className="text-option-box">
            My Collection
            <img className="icons" src={collectionIcon} alt="collection-icon" />
          </Link>
          <Link to="/favorite" className="text-option-box">
            {" "}
            My Favorites{" "}
            <img className="icons" src={heartIcon} alt="heart-icon" />{" "}
          </Link>
          {/* <Link to="/friends"> My Friends</Link> */}
        </div>
      </div>
    </StyledProfile>
  );
}

export default ProfilePage;
