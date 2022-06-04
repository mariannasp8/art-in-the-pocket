import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;

  label {
    color: ${({ theme }) => "#000000"};
    align-self: flex-start;
  }
  input {
    ${({ theme }) => theme.colors.lightGrey || "#B9AFAC"};
    padding: 12px 10px;
    margin: 12px;
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
      <h1>Art in the Pocket</h1>
      <div>
        <h4>Signup</h4>
        <Form onSubmit={handleSubmit}>
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
        <Link to="/login"> Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;
