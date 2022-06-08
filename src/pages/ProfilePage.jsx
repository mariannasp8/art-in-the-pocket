import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Avatar from "../components/Avatar";
import heartIcon from "../assets/icons/heart.2.png";
import addIcon from "../assets/icons/add.png";
import collectionIcon from "../assets/icons/collection.2.png";

const StyledProfile = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  border: 1px solid purple;
  height: 820px;
 
  
  .section1 {
        padding: 1rem;
    heigth: 40hw;
    width: 70vw;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
   ${"" /*  border: 1px solid green; */}
    
  }

  .section2 {
    
    padding: 20px 0;
    ${"" /* border: 1px solid blue; */}
    height: 30hw;
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .option-box {
    margin-top: 40px;
    padding-top: 20px;
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
    color: ${({ theme }) => theme.colors.black || "#000000"};
  }
  .icons {
    height: 1.2rem;
  }
  h5{
    font-size:16px
  }
  h3{
    font-size:20px;
    padding-top:20px;
  }
  
  .edit-pro {
    text-decoration: none;
    padding-bottom: 14px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black || "#000000"};
    font-size: 16px
  }
  b {
    color: ${({ theme }) => theme.colors.black || "#000000"};
  }
  .last-box {
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 35px;

  }
  .logout-btn {
    background-color: ${({ theme }) => theme.colors.black || "#000000"};
    border-style: none;
  color: ${({ theme }) => theme.colors.white || " #ffffff"};
  width: 50px;
  height: 30px;
  margin: 0.5rem;
  border-radius: 8px;
  padding: 80px 20px 80px 20;
  text-align: center;
  font-size: 12px;
  }
`;

function ProfilePage() {
  const [picture, setPicture] = useState("");
  const [loggedUser, setLoggedUser] = useState({});
  const { user, logoutUser } = useContext(AuthContext);
  const handlePicture = (file) => setPicture(file);

  const getUser = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/profile/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      console.log(response.data);
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
          <Avatar
            image={loggedUser.img}
            width="170px"
            alt="defaul profile picture"
          />
          <h3>
            <b className="nameOf">{loggedUser && loggedUser.username}</b>
          </h3>
        </section>
        {loggedUser && (
          <section className="section2">
            <h5>
              {" "}
              <b>Name: </b>
              {loggedUser.name}
            </h5>
            <h5>
              <b>Username: </b> {loggedUser.username}
            </h5>
            <h5>
              <b>Email :</b> {loggedUser.email}
            </h5>
            {/* <  handlePicture={handlePicture} /> */}
          </section>
        )}

        <div className="option-box">
          <Link to="/collection" className="text-option-box">
            <b>My Collection</b>
            <img className="icons" src={collectionIcon} alt="collection-icon" />
          </Link>
          <Link to="/collection-create" className="text-option-box">
            <b>Create Collection</b>
            <img className="icons" src={addIcon} alt="heart-icon" />{" "}
          </Link>
          <Link to="/favorite" className="text-option-box">
            <b>My Favorites</b>
            <img className="icons" src={heartIcon} alt="heart-icon" />{" "}
          </Link>
          {/* <Link to="/friends"> My Friends</Link> */}
        </div>
        <div className="last-box">
          <Link className="edit-pro" to={`/edit-profile/${user._id}`}>
            <b>Edit Profile</b>{" "}
            <img className="icons" src={addIcon} alt="add-icon" />
          </Link>
          <div>
            <button className="logout-btn" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
}

export default ProfilePage;
