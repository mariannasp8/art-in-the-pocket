import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Avatar from "../components/Avatar";
import ProfilePicture from "../assets/images/bronzino-portrair-of-a-young-man-1530.jpg";
import collectionIcon from "../assets/icons/collection.2.png";
import NavbarBottom from "../components/NavbarBottom";
import painting1 from "../assets/paintings/potato-joan-miro-1928.jpg";
import painting2 from "../assets/paintings/joan-miro-contellation-toward-the-rainbow-1941.jpg";
import deleteIcon from "../assets/icons/delete.2.png";
import profileIcon from "../assets/icons/profile.2.png";
import { Card, Carousel, Button } from "react-bootstrap";

const StyledCollection = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  margin-top: 60px;
  margin-bottom: 90px;
  .profile-section {
    margin-top: 10px;
    heigth: 50hw;
    width: 80vw;
    ${"" /* order: 1px solid green; */}
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
  .main-section {
    margin-top: 20px;
    ${"" /*  border: 1px solid blue; */}
    height: 100hw;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .titleCollection {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 10px;
    gap: 0.7rem;
  }
  .collection1 {
    padding-top: 60px;
    border: 1px solid red;
    height: 40hw;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    margin: 0;
  }
  .eachCollection {
    ${"" /*  border: 1px solid yellow; */}
    height: 100px;
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .detailsCollection {
    ${"" /*  border: 1px solid red; */}
    height: 30px;
    width: 240px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;
  }
  .img-text {
    heigth: 10hw;
    width: 35vw;
    ${"" /*  border: 1px solid black; */}
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  #eachImg {
    border-radius: 24px;
  }
  .icons {
    height: 1.2rem;
  }

  h5 {
    font-size: 18px;
  }
  h4 {
    font-size: 18px;
  }
  h3 {
    font-size: 26px;
  }
  .paintor-name {
    font-size: 12px;
  }
  p {
    font-size: 12px;
  }
  h4 > b {
    font-size: 12px;
  }
  .paiting-name {
    font-size: 14px;
  }
  #col-name {
    font-size: 16px;
  }
  .delete-icon img {
    ${"" /*  border: 1px solid white; */}
    height: 20px;
    width: 20px;
    margin-left: 160px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    gap: 2rem;
  }
  .removePiece-btn {
    margin-left: -240px;
    margin-bottom: 20px;
    height: 30px;
    width: 60px;
    font-size: 9px;
    background-color: ${({ theme }) => theme.colors.black || "#000000"};
    border-style: none;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
    border-radius: 8px;
    padding: 80px 20px 80px 20;
  }
  #details-btn {
    margin-top: 10px;
    margin-left: 130px;
    height: 25px;
    width: 55px;
    font-size: 9px;
    background-color: ${({ theme }) => theme.colors.black || "#000000"};
    border-style: none;
    border-radius: 8px;
    padding: 80px 20px 80px 20;
  }
  .stylink {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
  }
`;

function CollectionPage() {
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    const storedToken = localStorage.getItem("authToken");
    try {
      let response = await axios.get("http://localhost:5005/api/collection", {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      console.log(response.data);
      setCollections(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  const navigate = useNavigate();

  const deleteCollection = async (collectionId) => {
    const storedToken = localStorage.getItem("authToken");
    try {
      await axios.delete(
        `http://localhost:5005/api/collection/${collectionId}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      getCollections();
    } catch (error) {
      console.log(error);
    }
  };

  const removePiece = async (pieceId, collectionId) => {
    const storedToken = localStorage.getItem("authToken");

    try {
      const body = { pieceId, collectionId };
      console.log(body);
      let response = await axios.put(
        `http://localhost:5005/api/collection/delete-piece`,
        body,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      getCollections();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledCollection>
      <div>
        <section className="profile-section">
          <h5 className="welcome">
            Welcome <b>Vincent</b>
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
            <img className="icons" src={collectionIcon} alt="collection-icon" />
          </h3>
          {collections.length > 0 &&
            collections.map((collec) => {
              return (
                <div key={collec.id}>
                  <h4 className="titleCollection">
                    <b id="col-name">My Collection </b>
                    <em>{collec.title}</em>
                  </h4>
                  <Carousel>
                    {collec.pieces.length === 0 && (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={collec.img}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h5>New Collection</h5>
                          <p>Go and insert your art pieces</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )}
                    {collec.pieces.length > 0 &&
                      collec.pieces.map((piece) => {
                        return (
                          <Carousel.Item>
                            <img
                              id="eachImg"
                              className="d-block w-100"
                              src={piece.img}
                              alt="First slide"
                            />
                            <Carousel.Caption>
                              <div className="eachCollection">
                                <h5>{piece.title}</h5>
                                <p>{piece.author}</p>
                                <div className="detailsCollection">
                                  <p>{piece.date}</p>

                                  <div className="delete-icon">
                                    <img
                                      onClick={() =>
                                        removePiece(piece._id, collec._id)
                                      }
                                      src={deleteIcon}
                                      alt="delete-icon"
                                    />
                                    <button id="details-btn">
                                      <Link
                                        className="stylink"
                                        to={`/details/${piece._id}`}
                                      >
                                        Details
                                      </Link>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Carousel.Caption>
                          </Carousel.Item>
                        );
                      })}
                  </Carousel>
                  <button
                    className="removePiece-btn"
                    onClick={() => deleteCollection(collec._id)}
                  >
                    Delete Collection
                  </button>
                </div>
              );
            })}
        </section>
      </div>
      <NavbarBottom />
    </StyledCollection>
  );
}

export default CollectionPage;

{
  /* <div className="allCollections">
            {collections.length > 0 &&
              collections.map((element) => {
                return (
                  <div className="eachCollection">
                    <Carousel>
                      {element.pieces.map((piece) => {
                        return (
                          <div className="piece-container">
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={piece.img}
                                alt="collectionImg"
                              ></img>

                              <Carousel.Caption>
                                <div className="imgText">
                                  <h5>{piece.title}</h5>
                                  <p>{piece.author}</p>
                                   <div>
                                    <p>{piece.date}</p>
                                  </div> 
                                </div>
                                <div className="delete-icon">
                                  <img
                                    onClick={() =>
                                      removePiece(piece._id, element._id)
                                    }
                                    src={deleteIcon}
                                    alt="delete-icon"
                                  />
                                </div>
                              </Carousel.Caption>
                            </Carousel.Item>
                          </div>
                        );
                      })}
                    </Carousel>
                    <button
                      className="removePiece-btn"
                      onClick={() => deleteCollection(element._id)}
                    >
                      Delete Collection
                    </button>
                  </div>
                );
              })}
          </div> 
        */
}
