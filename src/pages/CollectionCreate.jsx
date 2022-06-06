import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pabloImg from "../assets/images/self-portrait-pablo-picasso-1906.jpg";
import styled from "styled-components";

const StyledCollectionCreate = styled.body`
  heigth: 100vh;
  width: 100wh;
  background-size: cover;
  background-position: center;

  h3 {
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
    font-size: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  width: 250px;
  padding: 0px 20px 20px 20px;
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
  button {
    background-color: ${({ theme }) => theme.colors.black || "#000000"};
    border-style: none;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    border-radius: 8px;
    padding: 50px 20px 50px 20;
    text-align: center;
    font-size: 18px;
  }
`;

function CollectionCreate() {
  const [title, setTitle] = useState("");
  const [img, setImage] = useState("");

  const navigate = useNavigate();
  const handleTitle = (e) => setTitle(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, img };
    const getToken = localStorage.getItem("authToken");

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/create-collection`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then(() => {
        setTitle("");
        setImage("");
        navigate("/collection");
        // props.refreshProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledCollectionCreate style={{ backgroundImage: `url(${pabloImg})` }}>
      <div>
        <h3>Create your Collection</h3>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="title"></label>
          <input
            type="text"
            name="title"
            placeholder="Insert your Collection Title"
            value={title}
            onChange={handleTitle}
          />

          <label htmlFor="iamge">Image</label>
          <input type="url" name="image" value={img} onChange={handleImage} />

          <button type="submit">Create</button>
        </Form>
      </div>
    </StyledCollectionCreate>
  );
}

export default CollectionCreate;
