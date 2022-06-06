import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Avatar from "../components/Avatar";
import heartIcon from "../assets/icons/heart.2.png";
import collectionIcon from "../assets/icons/collection.2.png";
import ProfilePicture from "../assets/images/bronzino-portrair-of-a-young-man-1530.jpg";

const StyledProfile = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  .section1 {
    heigth: 50hw;
    width: 70vw;
    border: 1px solid green;
    
  }

  .section2 {
    border: 1px solid blue;
    height: 30hw;
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .option-box {
    padding-top: 60px;
    border: 1px solid red;
    height: 40hw;
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    margin:0;
  }
  .text-option-box {
    text-decoration: none;
    font-size: 18px
    font-weight: bold;
  }
  .icons {
    height: 1.2rem;
  }
  h5{
    font-size:16px
  }
  h3{
    font-size:20px
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
          <div>
            <Avatar
              src={ProfilePicture}
              width="20px"
              alt="defaul profile picture"
            />
            {/* <img src={user.img} alt="profile-picture" className="profile-pic" /> */}
            {/*  <h5> {loggedUser.name} </h5> */}
          </div>
          <h3>
            <b>Vincent Van Gogh</b>
          </h3>
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
