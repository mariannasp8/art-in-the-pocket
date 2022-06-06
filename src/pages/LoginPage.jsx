import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import styled from "styled-components";
import logImage from "../assets/images/paul-gauguin-ia-orana-maria-1891.jpg";

const StyledLogin = styled.body`
  heigth: 100vh;
  width: 100wh;
  background-size: cover;
  background-position: center;

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
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
  p {
    color: ${({ theme }) => theme.colors.black || "#000000"};
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
    padding: 50px 20px 50px 20;
    text-align: center;
    font-size: 18px;
  }

  h4 {
    color: ${({ theme }) => theme.colors.black || "#000000"};
    font-size: 18px;
  }
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

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
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        // setErrorMessage(err.response.data.errorMessage);
        console.log(err);
      });
  };

  return (
    <div className="LoginPage">
      <StyledLogin style={{ backgroundImage: `url(${logImage})` }}>
        <h1>Art in your Pocket</h1>
        <div>
          <Form onSubmit={handleSubmit}>
            <h4>Login</h4>
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
          <Link className="link" to="/singup">
            <b
              className="
        bold-sng"
            >
              Signup
            </b>
          </Link>
        </div>
      </StyledLogin>
    </div>
  );
}

export default LoginPage;
