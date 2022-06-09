import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import PiecesCard from "../components/PiecesCard";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import ProfilePicture from "../assets/images/bronzino-portrair-of-a-young-man-1530.jpg";
import heartIcon from "../assets/icons/heart.2.png";
import { Card, Carousel, Button } from "react-bootstrap";
import deleteIcon from "../assets/icons/delete.2.png";

const StyledFavorites = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  margin-top: 60px;
  margin-bottom: 220px;
  ${"" /* border: 1px solid purple; */}
  width: 100%;
  heigth: 100%;

  .profile-section {
    margin-top: 10px;
    heigth: 50hw;
    width: 80vw;
    ${"" /* border: 1px solid green; */}
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: flex-end;
    justify-content: space-between;
  }
  .welcome {
    margin-left: 90px;
  }
  .p {
    font-size: 12px;
  }
  .icons {
    height: 1.2rem;
  }
  p {
    font-size: 12px;
  }
  h4 > b {
    font-size: 12px;
  }
  h3 {
    font-size: 26px;
  }
  h5 {
    font-size: 18px;
  }
  h4 {
    font-size: 18px;
    display: flex;
    justify-content: flex-start;
  }
  #eachImg1 {
    border-radius: 24px;
  }
  .image {
    border: 1px solid red;
    display: flex;
  }
  #fav-name {
    font-size: 16px;
    margin-top: 10px;
  }
  .main-section {
    margin-top: 12px;
    paddint-bottom: 10px;
    ${"" /*  border: 1px solid blue; */}
    height: 100hw;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 1rem;
  }

  .carousel {
    margin-top: 30px;
    width: 80vw;
    height: auto;
  }
  .remove-img-btn {
    ${"" /* border: 1px solid red; */}
    margin-left: 10px;
    margin-top: 20px;
    height: 30px;
    width: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    gap: 2rem;
  }

  .delete-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-left: 20px;
  }
`;

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);

  const getFavorites = async () => {
    const storedToken = localStorage.getItem("authToken");
    try {
      let response = await axios.get(
        `http://localhost:5005/auth/profile/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      //console.log(response.data);
      setFavorites(response.data.favorites);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const removePieceFromFavorite = async (pieceid) => {
    const storedToken = localStorage.getItem("authToken");

    try {
      let response = await axios.delete(
        `http://localhost:5005/api/favorites/delete-piece/${pieceid}`,

        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      getFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFavorites>
      <div>
        <section className="profile-section">
          <h5 className="welcome">
            Welcome <b>{user.username}</b>
          </h5>
          <Avatar
            image={ProfilePicture}
            width="70px"
            alt="defaul profile picture"
          />
        </section>
        <section className="main-section">
          <h3>
            Art in your pocket{" "}
            <img className="icons" src={heartIcon} alt="collection-icon" />
          </h3>
        </section>

        <div className="pieces-list">
          <h4>
            <b id="fav-name">My Favorites</b>
          </h4>
          <Carousel className="carousel">
            {favorites &&
              favorites.map((item) => {
                return (
                  <Carousel.Item>
                    <div id="img-group">
                      <img
                        id="eachImg1"
                        className="d-block w-100"
                        src={item.img}
                        alt="pieces"
                        width="200px"
                      />
                      <Carousel.Caption>
                        <h5>{item.title}</h5>
                        <p>{item.author}</p>
                        <img
                          className="remove-img-btn"
                          onClick={() => removePieceFromFavorite(item._id)}
                          src={deleteIcon}
                          alt="delete-icon"
                        />
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </div>
    </StyledFavorites>
  );
}

export default FavoritePage;
