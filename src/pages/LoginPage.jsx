import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import styled from "styled-components";
import logImage from "../assets/images/paul gauguin-ia orana maria-1891.jpg";

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  label {
    color: ${({ theme }) => theme.colors.mainOrange || "#000000"};
    align-self: flex-start;
  }
  input {
    ${({ theme }) => theme.colors.lightGrey || "#B9AFAC"};
    padding: 12px 10px;
    margin: 12px;
    border-radius: 12px;
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
  .bold-sng {
    color: black;
  }
  link {
    text-decoration: none;
  }
  .bkgd-img {
    heigth: 100vh;
    width: 100vw;
  }
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, autenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        console.log(response.data.authToken);
        storeToken(response.data.authToken);
        autenticateUser();
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="LoginPage">
      <body
        className="bkgd-img"
        style={{ backgroundImage: `url(${logImage})` }}
      >
        <h1>Art in the Pocket</h1>
        <div>
          <h4>Login</h4>
          <Form onSubmit={handleSubmit}>
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

            <button type="submit">Login</button>
          </Form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>Don't you have an account?</p>
          <Link to="/singup">
            <b
              className="
        bold-sng"
            >
              Signup
            </b>
          </Link>
        </div>
      </body>
    </div>
  );
}

export default LoginPage;
