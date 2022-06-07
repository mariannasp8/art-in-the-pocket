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

const StyledCollection = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  .profile-section {
    heigth: 50hw;
    width: 80vw;
    border: 1px solid green;
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
    border: 1px solid blue;
    height: 100hw;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
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
  .firstCollection {
    height: 60hw;
    width: 36vw;
    border: 1px solid orange;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .eachCollection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .img-text {
    heigth: 10hw;
    width: 35vw;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .icons {
    height: 1.2rem;
  }
  .paiting1 {
  }
  h5 {
    font-size: 14px;
  }
  h4 {
    font-size: 16px;
  }
  h3 {
    font-size: 26px;
  }
  .paintor-name {
    font-size: 12px;
  }
  p {
    font-size: 10px;
  }
  .paiting-name {
    font-size: 14px;
  }
  .delete-icon img {
    height: 20px;
    width: 20px;
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
      await axios.put(
        `http://localhost:5005/api/collection/delete-piece`,
        body,
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
          <div className="collection1">
            <h4>
              My Collection <em>Joan Mirò</em>
            </h4>
            <div className="firstCollection">
              <div className="eachCollection">
                <img
                  className="painting1"
                  src={painting1}
                  width="140px"
                  alt="collection paiting 1"
                />
                <div className="img-text">
                  <h5 className="paintor-name">Joan Mirò</h5>
                  <p>1928</p>
                </div>

                <p className="paiting-name">Potato</p>
              </div>

              <img
                className="painting2"
                src={painting2}
                width="140px"
                alt="collection paiting 2"
              />
            </div>
          </div>
          <div className="eachCollection">
            {collections.length > 0 &&
              collections.map((element) => {
                return (
                  <>
                    <h4>
                      My Collection <em>{element.title}</em>
                    </h4>
                    {element.pieces.length > 0 ? (
                      ""
                    ) : (
                      <img src={element.img} alt="img" />
                    )}

                    {element.pieces.map((piece) => {
                      return (
                        <>
                          <img src={piece.img} alt="collectionImg"></img>
                          <h5>{piece.title}</h5>
                          <p>{piece.date}</p>
                          <button
                            onClick={() => removePiece(piece._id, element._id)}
                          >
                            Remove piece
                          </button>
                        </>
                      );
                    })}
                    <div className="delete-icon">
                      <img
                        onClick={() => deleteCollection(element._id)}
                        src={deleteIcon}
                        alt="delete-icon"
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </section>
      </div>
      <NavbarBottom />
    </StyledCollection>
  );
}

export default CollectionPage;
