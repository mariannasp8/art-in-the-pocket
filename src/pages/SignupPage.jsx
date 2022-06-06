import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import signImage from "../assets/images/pieter-de-hooch-the-visit-1657.jpg";

const StyledSignup = styled.body`
  heigth: 100vh;
  width: 100wh;
  background-size: cover;

  h1 {
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
  b {
    color: ${({ theme }) => theme.colors.black || "#000000"};
  }
  .link {
    text-decoration: none;
  }
  .link b {
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
  p {
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
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
    padding: 80px 20px 80px 20;
    text-align: center;
    font-size: 18px;
  }

  h4 {
    color: ${({ theme }) => theme.colors.black || "#000000"};
    font-size: 18px;
  }
`;

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  /* const { storeToken, autenticateUser } = useContext(AuthContext); */

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="SignupPage">
      <StyledSignup style={{ backgroundImage: `url(${signImage})` }}>
        <h1>Art in your Pocket</h1>
        <div>
          <Form onSubmit={handleSubmit}>
            <h4>Signup</h4>
            <label htmlFor="username"></label>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={handleUsername}
            />

            <label htmlFor="email"></label>
            <input
              type="text"
              placeholder="youremail@email.com"
              name="email"
              value={email}
              onChange={handleEmail}
            />

            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="your password"
              name="password"
              value={password}
              onChange={handlePassword}
            />

            <button type="submit">Sign Up</button>
          </Form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>Already have an account?</p>
          <Link className="link" to="/login">
            {" "}
            <b>Login</b>
          </Link>
        </div>
      </StyledSignup>
    </div>
  );
}

export default SignupPage;
