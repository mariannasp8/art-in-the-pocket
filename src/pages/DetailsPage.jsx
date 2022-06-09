import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import base1 from "../assets/images/base-01.jpg";
/* import base2 from "../assets/images/base-02.jpg"; */

const StyledDetailsPage = styled.body`
  heigth: 100vh;
  width: 100wh;
  background-size: cover;
  background-position: center;
  padding-top: 60px;
  padding-bottom: 80px;
  .all-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  h1 {
    color: ${({ theme }) => theme.colors.black || "#000000"};
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
    font-size: 16px;
  }
  .piece-img {
    ${"" /* border: 1px solid red; */}
    height: 35vh;
    width: 80vw;
    margin-bottom: 20px;
  }
  .details-img {
    ${"" /* border: 1px solid orange; */}
    height: 16vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .details1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .details2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .details3 {
    padding-top: 10px;
    ${"" /* border: 1px solid red; */}
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .details3 p {
    font-size: 12px;
  }
  .text-img {
    margin-top: 20px;
    ${"" /* border: 1px solid blue; */}
    height: 40vh;
    width: 80vw;
  }
  img {
    width: 70vw;
    border-radius: 10px;
    margin-bottom: 40px;
  }
  #myDate {
    font-size: 12px;
  }
`;

function DetailsPage() {
  const [pieces, setPieces] = useState({});
  /* const [img, setImg] = useState(""); */
  const { pieceId } = useParams();

  const getDetailsPiece = async () => {
    const storedToken = localStorage.getItem("authToken");
    try {
      let response = await axios.get(
        `http://localhost:5005/api/details/${pieceId}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      //console.log(response.data);
      setPieces(response.data);
      /*  setImg(response.data.img); */
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailsPiece();
  }, []);

  return (
    <div className="all-page">
      <StyledDetailsPage style={{ backgroundImage: `url(${base1})` }}>
        <h1>Art in your Pocket</h1>
        <div className="piece-image">
          <img
            className="imagePainting"
            src={pieces.img}
            alt="painting Detail"
          />
        </div>
        <div className="details-img">
          <div className="details1">
            <h5>
              <b>{pieces.title}</b>
            </h5>
            <p>
              <b id="myDate">{pieces.date}</b>
            </p>
          </div>

          <div className="details2">
            <h5>
              <em>{pieces.author}</em>
            </h5>

            <div className="details3">
              <p>
                <b>Materials: </b> {pieces.material}
              </p>
              <p>
                <b>Dimensions: </b>
                {pieces.dimensions}
              </p>
            </div>
          </div>
        </div>
        <div className="text-img">
          {" "}
          <p>{pieces.description}</p>{" "}
        </div>
      </StyledDetailsPage>
    </div>
  );
}

export default DetailsPage;
