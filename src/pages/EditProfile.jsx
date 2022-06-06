import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import editProImg from "../assets/images/portrait-ot-the-artirs-john-vanderlyn-1800.jpg";

const StyledEditProfile = styled.body`
  heigth: 100vh;
  width: 100wh;
  background-size: cover;
  h3 {
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
    width: 100%;
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
`;

function EditProfile() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState([]);

  const navigate = useNavigate();
  const handleUsername = (e) => setUsername(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleImg = (e) => setImg(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, name, img };
    const getToken = localStorage.getItem("authToken");

    axios
      .put(`${process.env.REACT_APP_API_URL}/auth/edit-profile`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then(() => {
        setUsername("");
        setName("");
        setImg("");
        navigate("/profile");
        // props.refreshProjects();
      })
      .catch((err) => console.log(err));

    /*  useEffect(() => {
      getProject();
    }, []);
 */
  };

  return (
    <div>
      <StyledEditProfile style={{ backgroundImage: `url(${editProImg})` }}>
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
      </StyledEditProfile>
    </div>
  );
}

export default EditProfile;
