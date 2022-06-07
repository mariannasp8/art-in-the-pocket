import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import editProImg from "../assets/images/portrait-ot-the-artirs-john-vanderlyn-1800.jpg";
import profileIcon from "../assets/icons/profile.2.png";

const StyledEditProfile = styled.body`
  heigth: 100vh;
  width: 100wh;
  background-size: cover;
  background-position: center;
  h1 {
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
  h3 {
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
    width: 100%;
  }
  .profileIcon {
    widht: 20px;
  }
  .goBack {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black || "#000000"};
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  padding: 20px 20px 20px 20px;
  border-radius: 10px;
  background-color: hsla(0, 100%, 99%, 0.4);

  input {
    ${({ theme }) => theme.colors.lightGrey || "#B9AFAC"};
    padding: 12px 10px;
    margin: 12px;
    border-radius: 12px;
    border: none;
    background-color: hsla(0, 100%, 99%, 0.4);
  }
  label {
    display: flex;
    align-items: flex-start;
    margin-left: 12px;
  }
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

  h4 {
    color: ${({ theme }) => theme.colors.black || "#000000"};
    font-size: 18px;
  }
  .goBack {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

function EditProfile() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState([]);
  const { userId } = useParams();

  const getProfile = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setUsername(response.data.username);
      setName(response.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const navigate = useNavigate();
  const handleUsername = (e) => setUsername(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleImg = (e) => setImg(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, name, img };
    const getToken = localStorage.getItem("authToken");

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/auth/edit-profile/${userId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      )
      .then(() => {
        setUsername("");
        setName("");
        setImg("");
        navigate(`/profile}`);
        // props.refreshProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <StyledEditProfile style={{ backgroundImage: `url(${editProImg})` }}>
        <h1>Art in your Pocket</h1>
        <h3>Edit your Profile</h3>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />

          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={name} onChange={handleName} />

          <button type="submit">Edit</button>
        </Form>
        <div>
          <Link to="/profile" className="GoBack">
            My Profile
            <img
              className="profileIcon"
              src={profileIcon}
              width="32px"
              alt="profile-icon"
            />
          </Link>
        </div>
      </StyledEditProfile>
    </div>
  );
}

export default EditProfile;
